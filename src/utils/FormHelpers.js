import * as Yup from 'yup';

export const formValidations = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required';
  } else if (values.fullName.length > 15) {
    errors.fullName = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

export const YupSchema = Yup.object({
  fullName: Yup.string()
    .max(10, 'Must be 10 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});
