import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  PoweredBy,
  Stats
} from 'react-instantsearch';
import AlgoliaConfig from './algolia-config';
import Autocomplete from './autocomplete';
import SearchBox from './searchbox';
import ResultsList from './search-results';
import RefinementListWidget from './refinement-list';
import CustomFilters from './custom-filters';
import CurrentRefinementWidget from './current-refinements';
import PaginationWidget from './pagination';

const searchClient = algoliasearch(AlgoliaConfig.APP_ID, AlgoliaConfig.API_KEY);

/* https://www.algolia.com/doc/guides/building-search-ui/widgets/showcase/react/ */

const AlgoliaWidgetsPage = () =>
// TODO: window.aa('setUserToken', 'user-id');
// cookie consent service like OneTrust or TrustArc,
// https://www.algolia.com/doc/guides/building-search-ui/events/react/#set-the-insights-option-to-true

  (
    <Grid sx={{ padding: '10px 20px 40px 20px' }}>
      <Typography variant="h5" sx={{ mb: '20px' }}>Algolia Widgets</Typography>
      <Autocomplete />
      <InstantSearch
        searchClient={searchClient}
        indexName={AlgoliaConfig.DEFAULT_INDEX}
        insights
      >
        <Configure hitsPerPage={AlgoliaConfig.CONFIG.hitsPerPage} />
        <Grid container item xs={12} sx={{ mt: '40px' }}>
          <Grid item xs={12} md={3}>
            <RefinementListWidget />
            <CustomFilters />
            <CurrentRefinementWidget />
          </Grid>
          <Grid container item xs={12} md={9}>
            <Grid item xs={12}>
              <SearchBox />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                <Stats
                  translations={{
                    rootElementText({ nbHits, processingTimeMS }) {
                      return `${nbHits} results in ${processingTimeMS} ms`;
                    }
                  }}
                />
              </Grid>
              <Grid container item xs={6} justifyContent="flex-end">
                <PoweredBy
                  classNames={{ root: 'ais-PoweredBy--root' }}
                  theme="dark"
                />
              </Grid>
            </Grid>
            <ResultsList />
            <PaginationWidget />
          </Grid>
        </Grid>
      </InstantSearch>
    </Grid>
  )
;

export default AlgoliaWidgetsPage;

/**
 * 	NOTES -
 *
 *	1. Overridden algolia styles in
 *     "src/assets/styles/algolia-styles.css" file
 *  2. For ClearRefinements we also have includedAttributes and
 *     excludedAttributes as optional props. By default, all
 *     attributes are included. If any attribute is excluded,
 *     filters will not be removed from that attribute when
 *     clicking the "Clear Filters" button.
 */
