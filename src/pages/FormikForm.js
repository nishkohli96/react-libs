import Divider from '@material-ui/core/Divider';

import FormikForm1 from '_Components/FormikEgs/FormikForm1';
import FormikForm2 from '_Components/FormikEgs/FormikForm2';
import FormikForm3 from '_Components/FormikEgs/FormikForm3';

const FormikForm = () => (
  <div className="container p-5">
    <FormikForm1 />
    <Divider />
    <FormikForm2 />
    <Divider />
    <FormikForm3 />
  </div>
);

export default FormikForm;
