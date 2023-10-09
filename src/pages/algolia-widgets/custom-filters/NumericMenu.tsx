import { useNumericMenu, UseNumericMenuProps } from 'react-instantsearch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const NumericMenu = (props: UseNumericMenuProps) => {
  const { items, refine } = useNumericMenu(props);
  return (
    <div>
      {items.map((item) => (
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
