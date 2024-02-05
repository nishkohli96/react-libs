/**
 * Algolia Configure Widget Props
 * https://www.algolia.com/doc/api-reference/search-api-parameters/
 */

const AlgoliaConfig = Object.freeze({
  APP_ID: process.env.REACT_APP_ALGOLIA_APP_ID ?? '',
  API_KEY: process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? '',
  DEFAULT_INDEX: 'default_index',
  FACET_ATTRIBUTES: {
    brand: 'brand',
    categories: 'categories',
    price: 'price'
  },
  ALGOLIA_EVENTS: {
    click: 'click',
    conversion: 'conversion'
  },
  USER_EVENTS: {
    product_click: 'Product Clicked',
    product_purchased: 'Product Purchased'
  },
  CONFIG: {
    hitsPerPage: 15
  }
});

export default AlgoliaConfig;
