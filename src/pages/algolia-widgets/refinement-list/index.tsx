import { Fragment } from 'react';
import { RefinementList } from 'react-instantsearch';
import ListResults from './ListResults';
import AlgoliaConfig from '../algolia-config';

const RefinementListWidget = () => {
  return (
    <Fragment>
      <h6>Refinement List</h6>
      <h5>Filter By Brand</h5>
      <ListResults
        attribute={AlgoliaConfig.FACET_ATTRIBUTES.brand}
        showMore
        // sortBy={["name:desc"]}
      />
      <h5>Filter By Categories</h5>
      <RefinementList
        attribute={AlgoliaConfig.FACET_ATTRIBUTES.categories}
        searchable
        // transformItems={(items) =>
        // 	items.filter((item) => item.count >= 10)
        // }
      />
    </Fragment>
  );
};

export default RefinementListWidget;
