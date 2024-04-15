import Typography from '@mui/material/Typography';
import { TitledContainer } from '../../components/atoms';
import MuiRte from './mui';
import CkEditor from './CkEditor';

export default function RtePage() {

  return (
    <div>
      <Typography variant="h4" color="primary">
        Rich Text Editors
      </Typography>
      <TitledContainer title="mui-rte">
        <MuiRte />
      </TitledContainer>
      <TitledContainer title="ckeditor5-classic">
        <CkEditor />
      </TitledContainer>
      {/* <TitledContainer title="ckeditor5-plugins">
        <CkEditorAdvanced />
      </TitledContainer> */}
    </div>
  );
}
