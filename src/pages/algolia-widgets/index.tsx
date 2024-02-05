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

const AlgoliaWidgetsPage = () => {
  // TODO: window.aa('setUserToken', 'user-id');
  // cookie consent service like OneTrust or TrustArc,
  // https://www.algolia.com/doc/guides/building-search-ui/events/react/#set-the-insights-option-to-true

  return (
    <div style={{ padding: '10px 20px 40px 20px' }}>
      <Autocomplete />
      <h1>Algolia Widgets</h1>
      <InstantSearch
        searchClient={searchClient}
        indexName={AlgoliaConfig.DEFAULT_INDEX}
        insights
      >
        <Configure hitsPerPage={AlgoliaConfig.CONFIG.hitsPerPage} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-3">
              <RefinementListWidget />
              <CustomFilters />
              <CurrentRefinementWidget />
            </div>
            <div className="col-xs-12 col-md-9">
              <div className="row">
                <SearchBox />
              </div>
              <div className="row">
                <div className="col-6">
                  <Stats
                    translations={{
                      rootElementText({ nbHits, processingTimeMS }) {
                        return `${nbHits} results in ${processingTimeMS} ms`;
                      }
                    }}
                  />
                </div>
                <div className=" d-flex col-6 justify-content-end">
                  <PoweredBy
                    classNames={{
                      root: 'ais-PoweredBy--root'
                    }}
                    theme="dark"
                  />
                </div>
              </div>
              <ResultsList />
              <PaginationWidget />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

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
