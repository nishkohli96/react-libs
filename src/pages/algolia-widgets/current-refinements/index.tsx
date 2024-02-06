import { ReactElement, Fragment } from 'react';
import {
  useCurrentRefinements,
  CurrentRefinementsProps,
  ClearRefinements,
} from 'react-instantsearch';
import classNames from 'classnames';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AlgoliaConfig from '../algolia-config';

/**
 *  Items from useCurrentRefinements will be a nested
 *  array of attributes say brand or category which
 *  would have the brand or category filters list in
 *  the "refinementItem.refinements" array.
 */

const CurrentRefinementWidget = (
  props: CurrentRefinementsProps,
): ReactElement => {
  const { items, refine } = useCurrentRefinements(props);
  return (
    <div
      className={classNames('ais-CurrentRefinements--root', { 'ais-CurrentRefinements--noRefinementRoot': items.length === 0 })}
    >
      {items.length > 0 && <h6>Filters Applied</h6>}
      {items.map(refinementItem => {
        const isPriceFilter
          = refinementItem.attribute === AlgoliaConfig.FACET_ATTRIBUTES.price;
        return (
          <Fragment key={refinementItem.attribute}>
            <h5>
              {refinementItem.attribute.toUpperCase()}
            </h5>
            {isPriceFilter ? (
              <div
                key={refinementItem.label}
                className="ais-CurrentRefinements--refinement-item"
              >
                <span>
                  {refinementItem?.refinements?.[0]?.value}
                  {` <= ${AlgoliaConfig.FACET_ATTRIBUTES.price} < `}
                  {Math.round(
                    parseFloat(`${refinementItem?.refinements?.[1]?.value}`),
                  )}
                </span>
                <IconButton
                  onClick={() => {
                    refinementItem.refinements.map(ri => refine(ri));
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            ) : (
              <Fragment>
                {refinementItem.refinements.map(refinement => (
                  <div
                    key={refinement.label}
                    className="ais-CurrentRefinements--refinement-item"
                  >
                    <span>
                      {refinement.label}
                    </span>
                    <span>
                      {` (${refinement.count})`}
                    </span>
                    <IconButton onClick={() => refine(refinement)}>
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </Fragment>
            )}
          </Fragment>
        );
      })}
      <ClearRefinements
        classNames={{
          root: 'ais-ClearRefinements--root',
          button: 'ais-ClearRefinements--button',
          disabledButton: 'ais-ClearRefinements--button-disabled',
        }}
        translations={{ resetButtonText: 'Clear Refinements' }}
        // excludedAttributes={['brand']}
      />
    </div>
  );
};

export default CurrentRefinementWidget;
