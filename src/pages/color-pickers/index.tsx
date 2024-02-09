import Typography from '@mui/material/Typography';
import { TitledContainer } from '../../components/atoms';
import ReactColor from './ReactColor';

export default function ColorPickersPage() {
  return (
    <div>
      <Typography variant="h4" color="primary">
        Color Pickers
      </Typography>
      <TitledContainer title="react-color">
        <ReactColor />
      </TitledContainer>
    </div>
  );
}
