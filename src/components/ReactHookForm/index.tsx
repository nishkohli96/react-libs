import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    TextField,
    Select,
    Button,
    MenuItem,
    Grid,
    Typography,
} from '@material-ui/core';
import { FormSchema } from './schema';

const ReactHookForm = () => {
    const { control } = useForm({
        resolver: yupResolver(FormSchema),
    });

    // const {field, append, remove } = useFieldArray()

    return (
        <Grid container>
            <Typography variant="h6">React Hook Form Example</Typography>
        </Grid>
    );
};

export default ReactHookForm;
