import { useNumericMenu, UseNumericMenuProps } from 'react-instantsearch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const NumericMenu = (props: UseNumericMenuProps) => {
  const { items, refine } = useNumericMenu(props);
  return (
    <div>
      {items.map(item => (
        <FormGroup key={item.value}>
          <FormControlLabel
            control={
              <Checkbox
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
            }
            label={item.label}
          />
        </FormGroup>
      ))}
    </div>
  );
};

export default NumericMenu;
