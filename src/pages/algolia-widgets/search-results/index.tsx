import { useHits, UseHitsProps, Highlight } from 'react-instantsearch';
import type { Hit } from 'instantsearch.js';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AlgoliaConfig from '../algolia-config';
import { ProductInfo } from '../types';

const ResultsList = (props: UseHitsProps<ProductInfo>) => {
  const { hits, sendEvent } = useHits(props);

  const handleClickOnHit = (hit: Hit<ProductInfo>) => {
    sendEvent(
      AlgoliaConfig.ALGOLIA_EVENTS.click,
      hit,
      AlgoliaConfig.USER_EVENTS.product_click,
    );
  };

  const handleConversionOnHit = (hit: Hit<ProductInfo>) => {
    sendEvent(
      AlgoliaConfig.ALGOLIA_EVENTS.conversion,
      hit,
      AlgoliaConfig.USER_EVENTS.product_purchased,
    );
  };

  return (
    <Grid container>
      {hits.length > 0 ? (
        hits.map(hit => (
          <Grid
            container
            xs={12}
            md={6}
            lg={4}
            key={hit.objectID}
            sx={{
              padding: '1rem',
              marginBottom: '2rem',
              minHeight: theme => (theme.breakpoints.up('md') ? 400 : 'auto'),
            }}
            onClick={() => handleClickOnHit(hit)}
          >
            <Grid container item xs={12} justifyContent="center">
              <img
                src={hit.image}
                alt={hit.name}
                style={{
                  width: 85,
                  height: 160,
                  marginBottom: '1rem',
                }}
              />
            </Grid>
            <Typography variant='h5'>
              <Highlight hit={hit} attribute="name" />
            </Typography>
            <Typography>
              <Highlight hit={hit} attribute="brand" />
            </Typography>
            <Grid item
            sx={{ mt:'30px'}}
            >
              <Grid item xs={4}>
                  <Button
                    color="primary"
                    variant="outlined"
                    onClick={e => {
                      /**
                       *  Reqd to send only one click event,
                       *  else 2 api calls of same click event
                       *  will be made
                       **/
                      e.stopPropagation();
                      handleClickOnHit(hit);
                    }}
                  >
                    Click
                  </Button>
                <Grid className="col-8">
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={e => {
                      e.stopPropagation();
                      handleConversionOnHit(hit);
                    }}
                  >
                    Conversion
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))
      ) : (
        <div className="col-12 d-flex justify-content-center ">
          <h5>No Results Found...</h5>
        </div>
      )}
    </Grid>
  );
};

export default ResultsList;
