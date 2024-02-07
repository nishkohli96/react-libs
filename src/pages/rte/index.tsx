import Typography from '@mui/material/Typography';
import { TitledContainer } from '../../components/atoms';
import MuiRte from './Mui';
import CkEditor from './CkEditor';
import CkEditorAdvanced from './CkEditorAdvanced';

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
