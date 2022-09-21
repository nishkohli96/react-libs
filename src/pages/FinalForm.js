import { Form } from 'react-final-form';
import { Button, Grid } from '@material-ui/core';
import { FFSelect, FFTextField } from '_Components/atoms';

const FinalForm = () => {
    const onSubmit = (values) => console.log('vals ', values);
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{ fullName: 'tom', color: 'Blue' }}
            // validate={validate}
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
                                options={['Red', 'Blue', 'Black', 'White']}
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
