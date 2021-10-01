import { useFormik } from 'formik';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/* Can use Schema like Yup or own validation function to validate form*/
import { YupSchema } from '_Utils/FormHelpers';
// import { formValidations } from '_Utils/FormHelpers';

const formDefaults = {
    fullName: '',
    email: '',
    password: '',
};

const FormikForm1 = () => {
    const formik = useFormik({
        initialValues: formDefaults,
        // validate: formValidations,
        validationSchema: YupSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className="container mb-5">
            <div className="heading">
                Form using <span className="code">useFormik()</span> Hook
            </div>

            {/* Provide name & id field the same as key that in initialValues */}
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="formdiv">
                        <Textfield
                            label="Name"
                            id="fullName"
                            name="fullName"
                            className="textfield"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.fullName}
                            required
                        />
                        {formik.touched.fullName && formik.errors.fullName ? (
                            <div className="errText">
                                {formik.errors.fullName}
                            </div>
                        ) : null}
                    </div>

                    <div className="formdiv">
                        <Textfield
                            label="Email"
                            id="email"
                            name="email"
                            className="textfield"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            required
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="errText">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div className="formdiv">
                        <Textfield
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            className="textfield"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            required
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="errText">
                                {formik.errors.password}
                            </div>
                        ) : null}
                    </div>
                </div>

                <Button type="submit" style={styles.submitBtn}>
                    Submit Form
                </Button>
            </form>
        </div>
    );
};

const styles = {
    submitBtn: {
        marginTop: '20px',
        backgroundColor: '#F27C59',
        color: '#FFFFFF',
    },
};
export default FormikForm1;
