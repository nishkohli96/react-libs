import { useState } from 'react';
import { useRange, UseRangeProps } from 'react-instantsearch';
import Slider from '@material-ui/core/Slider';

const RangeSlider = (props: UseRangeProps) => {
  const { start, range, refine } = useRange(props);
  const { min, max } = range;
  // @ts-ignore
  const from = Math.max(min, Number.isFinite(start[0]) ? start[0] : min);
  // @ts-ignore
  const to = Math.min(max, Number.isFinite(start[1]) ? start[1] : max);

  const [value, setValue] = useState<number[]>([from, to]);

  const handleChange = (event: Event, newRange: number | number[]) => {
    setValue(newRange as number[]);
    // @ts-ignore
    refine([newRange?.[0], newRange?.[1]]);
  };
  return (
    <div style={{ padding: 10, display: 'flex', alignItems: "center"}}>
      <span>0</span>
      <Slider
        min={props.min}
        max={props.max}
        value={value}
        /* @ts-ignore */
        onChange={handleChange}
      />
      <span>1000</span>
    </div>
  );
};

export default RangeSlider;
