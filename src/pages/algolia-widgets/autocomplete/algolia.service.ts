import algoliasearch from 'algoliasearch/lite';
import AlgoliaConfig from '../algolia-config';
import { ProductInfo } from '../types';

const searchClient = algoliasearch(
  AlgoliaConfig.APP_ID,
  AlgoliaConfig.API_KEY
).initIndex(AlgoliaConfig.DEFAULT_INDEX);

export const fetchAlgoliaData = async (
  query: string,
  page?: number,
  facetFilters?: string[],
  numericFilters?: string[]
): Promise<ProductInfo[]> => {
  try {
    const products = await searchClient.search<ProductInfo>(query, {
      attributesToRetrieve: ['*'],
      facets: ['*'],
      filters: '',
      numericFilters,
      hitsPerPage: AlgoliaConfig.CONFIG.hitsPerPage,
      page: page ?? 0,
      facetFilters,
      clickAnalytics: true,
      getRankingInfo: true
    });
    return products.hits ?? [];
  } catch (err) {
    console.error('Unable to get products from algolia', err);
  }
  return [];
};

/**
 *  NOTES ->
 *  1. attributesToRetrieve: ['name', 'categories'], alongside these
 *     it will also retrive objectID, _highlightResult and _rankingInfo
 *     for each hit.
 *  2. facets: ['brand'] will only return "brand" facet from the list of
 *     attributes for faceting for that index
 *  3. filters: 'brand:Apple' will only return hits that are Apple products
 *     'brand:Samsung AND price:679.99' for multiple results
 *  4. numericFilters: 'price>50 AND price<200'
 *
 *  https://www.algolia.com/doc/api-reference/api-parameters/filters/
 *  https://www.algolia.com/doc/api-reference/api-parameters/facetFilters/#usage-notes
 *  https://www.algolia.com/doc/api-reference/api-parameters/optionalFilters/
 */
