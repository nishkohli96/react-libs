import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import FormJSEditor from './editor';
import FormJSViewer from './viewer';

export default function FormJSPage() {
  return (
    <Grid container>
      <FormJSEditor />
      <Grid item xs={12} sx={{ my: '30px' }}>
        <Divider />
      </Grid>
      <FormJSViewer />
    </Grid>
  );
}
