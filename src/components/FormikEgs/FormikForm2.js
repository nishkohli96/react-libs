import { Formik } from 'formik';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

/* Can use Schema like Yup or own validation function to validate form*/
import { YupSchema } from '@Utils/FormHelpers';
// import { formValidations } from '@Utils/FormHelpers';

const formDefaults = {
    fullName: '',
    email: '',
    password: '',
};

const FormikForm2 = () => {
    return (
        <div className="container my-5">
            <div className="heading mt-5 ">
                Form using <span className="code">Formik</span> Component
            </div>

            <Formik
                initialValues={formDefaults}
                validationSchema={YupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {(formik) => (
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
                                {formik.touched.fullName &&
                                formik.errors.fullName ? (
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
                                    <div className="errText">
                                        {formik.errors.email}
                                    </div>
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
                                {formik.touched.password &&
                                formik.errors.password ? (
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
                )}
            </Formik>
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
export default FormikForm2;
