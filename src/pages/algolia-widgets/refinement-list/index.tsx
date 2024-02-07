import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import { RefinementList } from 'react-instantsearch';
import ListResults from './ListResults';
import AlgoliaConfig from '../algolia-config';

const RefinementListWidget = () => (
  <Fragment>
    <Typography variant="h5">Refinement List</Typography>
    <Typography variant="h6">Filter By Brand</Typography>
    <ListResults
      attribute={AlgoliaConfig.FACET_ATTRIBUTES.brand}
      showMore
      // sortBy={["name:desc"]}
    />
    <Typography variant="h6">Filter By Categories</Typography>
    <RefinementList
      attribute={AlgoliaConfig.FACET_ATTRIBUTES.categories}
      searchable
      // transformItems={(items) =>
      // 	items.filter((item) => item.count >= 10)
      // }
    />
  </Fragment>
);

export default RefinementListWidget;
