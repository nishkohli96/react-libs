/**
 * https://github.com/bpmn-io/form-js/tree/develop/packages/form-js-editor
 *
 * Add the css below in public/index.html
 *
 * <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
 * <link rel="stylesheet" href="https://unpkg.com/@bpmn-io/form-js@1.7.0/dist/assets/form-js.css">
 * <link rel="stylesheet" href="https://unpkg.com/@bpmn-io/form-js@1.7.0/dist/assets/form-js-editor.css">
 */

import { useEffect } from 'react';
import { FormEditor } from '@bpmn-io/form-js-editor';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 7 });
const formId = uid.rnd();
const formEditor = new FormEditor();

const newFormSchema = {
  components: [],
  type: 'default',
  id: `Form_${formId}`,
  exporter: {
    name: 'form-js (https://demo.bpmn.io)',
    version: '1.6.4'
  },
  schemaVersion: 14
};

export default function FormJSEditor() {

  /* Load formEditor */
  useEffect(() => {
    async function loadFormEditor() {
      formEditor.attachTo('#form-editor');
      await formEditor.importSchema(newFormSchema);
    }
    loadFormEditor();
    return () => {
      formEditor.detach();
    };
  }, []);

  const handleFormSave = () => {
    /**
     * Stringify this schema and send to server to save this form. Each
     * form to be uniquely identified by Id.
     */
    console.log(formEditor.getSchema());
  };

  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Typography variant="h6" color="#007aba">
          1. Form editor
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <div id="form-editor" />
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Button color="primary" onClick={handleFormSave}>
          Save Form
        </Button>
      </Grid>
    </Grid>
  );
}
