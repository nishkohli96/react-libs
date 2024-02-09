import { useState } from 'react';
import { useRange, UseRangeProps } from 'react-instantsearch';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const RangeInput = (props: UseRangeProps) => {
  const { refine } = useRange(props);
  const [min, setMin] = useState<string | number>('');
  const [max, setMax] = useState<string | number>('');

  return (
    <div>
      <div>
        <TextField
          value={min}
          label="Min Price"
          placeholder={`${props.min ?? 0}`}
          onChange={e => setMin(e.target.value)}
        />
        <span>
          {' to '}
        </span>
        <TextField
          value={max}
          label="Max Price"
          placeholder={`${props.max ?? 0}`}
          onChange={e => setMax(e.target.value)}
        />
      </div>
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => refine([parseFloat(`${min}`), parseFloat(`${max}`)])}
        >
          Submit
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => {
            setMin('');
            setMax('');
          }}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export default RangeInput;
