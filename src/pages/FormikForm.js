import Divider from '@material-ui/core/Divider';

import FormikForm1 from '@Components/FormikEgs/FormikForm1';
import FormikForm2 from '@Components/FormikEgs/FormikForm2';
import FormikForm3 from '@Components/FormikEgs/FormikForm3';

const FormikForm = () => {
    return (
        <div className="container p-5">
            <FormikForm1 />
            <Divider />
            <FormikForm2 />
            <Divider />
            <FormikForm3 />
        </div>
    );
};

export default FormikForm;
