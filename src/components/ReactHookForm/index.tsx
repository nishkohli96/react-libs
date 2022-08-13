import { Controller, useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
    Button,
    Divider,
    Grid,
    IconButton,
    MenuItem,
    Select,
    TextField,
    Tooltip,
    Typography,
} from '@material-ui/core';
import { Delete, Replay } from '@material-ui/icons';
import { FormSchema } from './schema';
import { FormType, Colors, ItemShape } from './types';

const ReactHookForm = () => {
    const initialFormValues: FormType = {
        reqdText: 'required',
        quantity: null,
        color: Object.values(Colors)[0],
        items: [
            {
                name: '',
                description: '',
                shape: ItemShape[2],
                length: null,
                width: null,
                height: null,
            },
        ],
    };

    const {
        control,
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FormType>({
        resolver: yupResolver(FormSchema),
        defaultValues: initialFormValues,
        mode: 'onBlur',
    });

    const { fields, append, prepend, remove } = useFieldArray({
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
            <Grid container style={{ marginBottom: 40 }}>
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
                            {...register('quantity')}
                            type="number"
                            label="Quantity"
                            error={!!errors?.quantity}
                            helperText={errors?.quantity?.message}
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
                        <Grid
                            container
                            item
                            xs={1}
                            justifyContent="center"
                            alignItems="flex-end"
                        >
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
                        <Grid container item xs={2} alignItems="flex-end">
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
                        <Grid item xs={1}>
                            <TextField
                                {...register(`items.${index}.length`)}
                                style={{ width: 50 }}
                                type="number"
                                label="Length"
                                helperText={
                                    errors?.items?.[index]?.length?.message
                                }
                                error={!!errors?.items?.[index]?.length}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField
                                {...register(`items.${index}.width`)}
                                style={{ width: 50 }}
                                type="number"
                                label="Width"
                                helperText={
                                    errors?.items?.[index]?.width?.message
                                }
                                error={!!errors?.items?.[index]?.width}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <TextField
                                {...register(`items.${index}.height`)}
                                style={{ width: 50 }}
                                type="number"
                                label="Height"
                                helperText={
                                    errors?.items?.[index]?.height?.message
                                }
                                error={!!errors?.items?.[index]?.height}
                            />
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Replay row data">
                                <IconButton
                                    onClick={() =>
                                        setValue(
                                            `items.${index}`,
                                            initialFormValues.items[0]
                                        )
                                    }
                                >
                                    <Replay />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                        <Grid item xs={1}>
                            <Tooltip title="Delete Row">
                                <IconButton
                                    onClick={() => {
                                        if (fields.length > 1) {
                                            remove(index);
                                        }
                                    }}
                                >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Grid>
                    </Grid>
                ))}
                <Grid container item xs={12} style={{ marginTop: 20 }}>
                    <Grid item xs={2}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={() => append(initialFormValues.items[0])}
                        >
                            Append Item
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            color="secondary"
                            variant="outlined"
                            onClick={() =>
                                prepend({
                                    ...initialFormValues.items[0],
                                    name: 'Prepended Item',
                                })
                            }
                        >
                            Prepend Item
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            color="primary"
                            variant="outlined"
                            onClick={() => reset()}
                        >
                            Reset Form
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
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
