import { useHits, UseHitsProps, Highlight } from 'react-instantsearch';
import type { Hit } from 'instantsearch.js';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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
    <div className="d-flex row">
      {hits.length > 0 ? (
        hits.map(hit => (
          <Box
            className="col-12 col-md-6 col-lg-4"
            key={hit.objectID}
            style={{
              padding: '1rem',
              marginBottom: '2rem',
            }}
            sx={{ minHeight: theme => (theme.breakpoints.up('md') ? 400 : 'auto') }}
            onClick={() => handleClickOnHit(hit)}
          >
            <div className="d-flex d-md-block justify-content-center">
              <img
                src={hit.image}
                alt={hit.name}
                style={{
                  width: 85,
                  height: 160,
                  marginBottom: '1rem',
                }}
              />
            </div>
            <h5>
              <Highlight hit={hit} attribute="name" />
            </h5>
            <p>
              <Highlight hit={hit} attribute="brand" />
            </p>
            <div
              className="d-flex d-md-block justify-content-center"
              style={{
                position: 'absolute',
                bottom: 0,
              }}
            >
              <div className="row">
                <div className="col-4">
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
                </div>
                <div className="col-8">
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
                </div>
              </div>
            </div>
          </Box>
        ))
      ) : (
        <div className="col-12 d-flex justify-content-center ">
          <h5>No Results Found...</h5>
        </div>
      )}
    </div>
  );
};

export default ResultsList;
