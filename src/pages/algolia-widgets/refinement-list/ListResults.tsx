import { ReactElement } from 'react';
import { useRefinementList, RefinementListProps } from 'react-instantsearch';
import classNames from 'classnames';
import TextField from '@mui/material/TextField';

const ListResults = (props: RefinementListProps): ReactElement => {
  /*
   * Retrieves the refinement `items` and the `refine` function
   * to update the refinement. Else can import RefinementList
   * from 'react-instantsearch' package.
   */
  const { items, refine, searchForItems } = useRefinementList(props);

  return (
    <div className="ais-RefinementList">
      <TextField
        placeholder="Search for brands"
        sx={{ margin: '10px 0px' }}
        inputProps={{ style: { padding: '8px 12px' } }}
        onChange={e => searchForItems(e.currentTarget.value)}
      />
      {items.map(item => (
        <div
          key={item.value}
          className={classNames('ais-RefinementList-item', { 'ais-RefinementList-item--selected': item.isRefined })}
        >
          <label className="ais-RefinementList-label">
            <input
              className="ais-RefinementList-checkbox"
              type="checkbox"
              value={item.value}
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            />
            <span className="ais-RefinementList-labelText">
              {item.label}
            </span>
            <span className="ais-RefinementList-count">
              {` (${item.count})`}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ListResults;
