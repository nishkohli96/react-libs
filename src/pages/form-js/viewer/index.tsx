/**
 * https://github.com/bpmn-io/form-js/tree/develop/packages/form-js-viewer
 *
 * Make sure to add the styles in public/index.html
 * <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
 * <link href="https://unpkg.com/@bpmn-io/form-js/dist/assets/form-js.css" rel="stylesheet">
 */

import { useEffect } from 'react';
import { Form } from '@bpmn-io/form-js-viewer';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import formViewerSchema from './schema.json';

const form = new Form();

export default function FormJSViewer() {
  /* Load formViewer */
  useEffect(() => {
    async function getFormSchema() {
      await form.importSchema(formViewerSchema);
      form.attachTo('#form');
    }
    getFormSchema();
    /**
     * Another form kept on appending if I didn't cleanup
     * in useEffect...
     */
    return () => {
      form.detach();
    //   form.destroy();
    };
  }, []);

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  form.on('submit', (event: any) => {
    alert(event.data);
    console.log('Form submit data - ', event);
  });

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="h6" color="paleturquoise">
          2. Form viewer
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div id="form" />
      </Grid>
    </Grid>
  );
}
