import { Form } from 'react-final-form';
import { Button, Grid } from '@mui/material';
import { FFSelect, FFTextField } from 'components/atoms';
import { object, string } from 'yup';
import { setIn } from 'final-form';

const colors = [
  'Red',
  'Blue',
  'Black',
  'White'
];

const formSchema = object().shape({
  fullName: string().required()
    .min(3),
  bio: string().required('This field is reqd')
    .min(3),
  color: string().required()
    .oneOf(colors)
});

const FinalForm = () => {
  const onSubmit = values => console.log('vals ', values);

  const validateFormValues = schema => async values => {
    if (typeof schema === 'function') {
      schema = schema();
    }
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const errors = err.inner.reduce((formError, innerError) => setIn(formError, innerError.path, innerError.message), {});

      return errors;
    }
  };

  const validate = validateFormValues(formSchema);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      // initialValues={{ fullName: 'tom', color: 'Blue' }}
      // validate={(values) =>
      //     formSchema.validate(values, { abortEarly: false })
      // }
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid container item xs={12} justifyContent="center">
              <h1>React Final Form</h1>
            </Grid>
            <Grid item xs={4}>
              <FFTextField
                fieldName="fullName"
                placeholder="Name"
                label="Full Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <FFTextField
                fieldName="bio"
                placeholder="Bio"
                label="Bio"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                onChangeFn={() => console.log('field changed')}
              />
            </Grid>
            <Grid item xs={4}>
              <FFSelect
                fieldName="color"
                options={colors}
                label="Color"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default FinalForm;
