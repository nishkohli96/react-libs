import { UseNumericMenuProps, UseRangeProps } from 'react-instantsearch';
import AlgoliaConfig from '../algolia-config';
import NumericMenu from './NumericMenu';
import RangeInput from './RangeInput';
import RangeSlider from './RangeSlider';

const CustomFilters = () => {
  /**
   *	start: number: the option must be greater than
   *         or equal to start (lower bound).
   *  end: number: the option must be smaller than or
   *       equal to end (upper bound).
   */
  const numericMenuProps: UseNumericMenuProps = {
    attribute: 'price',
    items: [
      { label: 'All' },
      {
        label: 'Less than 50',
        end: 49.99,
      },
      {
        label: 'Between 50 - 300',
        start: 50,
        end: 299.99,
      },
      {
        label: 'Between 300 - 700',
        start: 300,
        end: 699.99,
      },
      {
        label: 'More than 700',
        start: 700,
      },
    ],
  };

  const rangeInputProps: UseRangeProps = {
    attribute: AlgoliaConfig.FACET_ATTRIBUTES.price,
    min: 0,
    max: 1000,
  };

  return (
    <div>
      <h5>Custom Price Filters</h5>
      <NumericMenu {...numericMenuProps} />
      <RangeInput {...rangeInputProps} />
      <RangeSlider {...rangeInputProps} />
    </div>
  );
};

export default CustomFilters;
