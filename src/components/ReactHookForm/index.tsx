import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    TextField,
    Select,
    Divider,
    Button,
    MenuItem,
    Grid,
    Typography,
} from '@material-ui/core';
import { FormSchema } from './schema';
import { FormType, Colors, ItemShape } from './types';

const ReactHookForm = () => {
    const initialFormValues: FormType = {
        reqdText: 'required',
        optionalText: '',
        color: Object.values(Colors)[0],
        items: [
            {
                name: '',
                description: '',
                shape: ItemShape[2],
                length: '',
                width: '',
                height: 0,
            },
        ],
    };

    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormType>({
        resolver: yupResolver(FormSchema),
        defaultValues: initialFormValues,
        mode: 'onBlur',
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });

    const submitForm = (values: FormType) => {
        console.log('Form submitted !');
        console.log(values);
    };

    return (
        <form>
            <Typography variant="h6">React Hook Form Example</Typography>
            <Grid container>
                <Grid container item xs={12} style={{ margin: '20px 0px' }}>
                    <Grid item xs={4}>
                        <TextField
                            {...register('reqdText')}
                            variant="outlined"
                            label="Required Text"
                            required
                            error={!!errors?.reqdText}
                            helperText={errors?.reqdText?.message}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            {...register('optionalText')}
                            label="Optional Text"
                            error={!!errors?.reqdText}
                            helperText={errors?.optionalText?.message}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="color"
                            defaultValue={initialFormValues.color}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    label="Color"
                                    style={{ width: 120 }}
                                >
                                    {Object.values(Colors).map(
                                        (color, index) => (
                                            <MenuItem key={index} value={color}>
                                                {color}
                                            </MenuItem>
                                        )
                                    )}
                                </Select>
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                    <Typography variant="body1" style={{ margin: '10px 0px' }}>
                        Add / Delete Items
                    </Typography>
                </Grid>
                {fields.map((field, index) => (
                    <Grid container item xs={12} key={field.id}>
                        <Grid item xs={1}>
                            <span style={{ marginRight: 20 }}>
                                Row {index + 1}
                            </span>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                {...register(`items.${index}.name`)}
                                label="Item name"
                                required
                                helperText={
                                    errors?.items?.[index]?.name?.message
                                }
                                error={!!errors?.items?.[index]?.name}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                {...register(`items.${index}.description`)}
                                label="Description"
                                helperText={
                                    errors?.items?.[index]?.description?.message
                                }
                                error={!!errors?.items?.[index]?.description}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Controller
                                control={control}
                                name={`items.${index}.shape`}
                                defaultValue={
                                    initialFormValues.items?.[index]?.shape
                                }
                                render={({ field }) => (
                                    <Select {...field} label="Shape" native>
                                        {Object.values(ItemShape).map(
                                            (shape, index2) => (
                                                <option
                                                    key={index2}
                                                    value={shape}
                                                >
                                                    {shape}
                                                </option>
                                            )
                                        )}
                                    </Select>
                                )}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                {...register(`items.${index}.length`)}
                                label="Length"
                                helperText={
                                    errors?.items?.[index]?.length?.message
                                }
                                error={!!errors?.items?.[index]?.length}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                {...register(`items.${index}.width`)}
                                label="Width"
                                helperText={
                                    errors?.items?.[index]?.width?.message
                                }
                                error={!!errors?.items?.[index]?.width}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                {...register(`items.${index}.height`)}
                                label="Height"
                                helperText={
                                    errors?.items?.[index]?.height?.message
                                }
                                error={!!errors?.items?.[index]?.height}
                            />
                        </Grid>
                    </Grid>
                ))}
                <Grid container item xs={12} style={{ marginTop: 20 }}>
                    <Grid item xs={6}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={handleSubmit(submitForm)}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default ReactHookForm;
