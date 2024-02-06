import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiRte from './Mui';
import CkEditor from './CkEditor';
import CkEditorAdvanced from './CkEditorAdvanced';

type RTEContainerProps = {
  title: string;
  children: ReactElement;
};

export default function RtePage() {
  const RTEContainer = ({ title, children }: RTEContainerProps) => (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" color="secondary" sx={{ mb: '20px' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );

  return (
    <div>
      <Typography variant="h4" color="primary">
        Rich Text Editors
      </Typography>
      <RTEContainer title="mui-rte">
        <MuiRte />
      </RTEContainer>
      <RTEContainer title="ckeditor5-classic">
        <CkEditor />
      </RTEContainer>
      {/* <RTEContainer title="ckeditor5-plugins">
        <CkEditorAdvanced />
      </RTEContainer> */}
    </div>
  );
}
