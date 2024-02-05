import { Fragment } from 'react';
import { useHits, usePagination, PaginationProps } from 'react-instantsearch';
import Pagination from '@material-ui/lab/Pagination';

const PaginationWidget = (props: PaginationProps) => {
  const { hits } = useHits();
  const { currentRefinement, nbPages, refine } = usePagination(props);
  /**
   *	Pagination numbering for MUI starts from 1 whereas
   *  for algolia it starts from zero.
   */
  return (
    <Fragment>
      {hits.length > 0 && (
        <Fragment>
          <div className="d-flex justify-content-center">
            <Pagination
              page={currentRefinement + 1}
              count={nbPages}
              color="primary"
              showFirstButton
              showLastButton
              onChange={(_, page: number) => refine(page - 1)}
            />
          </div>
          <div className="text-center">
            <h5>
              Page
              {' '}
              {currentRefinement + 1}
              {' '}
              of
              {' '}
              {nbPages}
            </h5>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PaginationWidget;

/**
 *  Pagination Hook explanation
 *  1. pages -> array of what pages are currently in view.
 *     eg: [11,12,13,14,15,16,17] where the list starts from
 *     0, but appears (x+1) in the UI, where x is any value
 *     from this array
 *	2. currentRefinement -> which page number is the user
 *     currently is. eg -> in pagination, highlighted tab is
 *     15, but in this case,  currentRefinement = 14
 *	3. nbHits -> number of hits for a search
 *	4. nbPages -> number of search result pages
 *	5. isFirstPage -> if user is on the first page for the
 *     search result, ie. currentRefinement = 0
 *	6. isLastPage -> if user is on last page
 *	createURL,
 */
