import { FC } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectProps,
    TextField,
    TextFieldProps,
} from '@material-ui/core';
import { Field } from 'react-final-form';

interface FFTextFieldProps {
    fieldName: string;
    /* custom function to run during onChange of the field */
    onChangeFn?: Function;
}

export const FFTextField: FC<TextFieldProps & FFTextFieldProps> = (tfProps) => {
    const { fieldName, ...rest } = tfProps;
    return (
        <Field name={fieldName}>
            {(props) => (
                <TextField
                    name={props.input.name}
                    value={props.input.value}
                    onChange={(e) => {
                        props.input.onChange(e);
                        rest.onChangeFn && rest.onChangeFn(e);
                    }}
                    {...rest}
                />
            )}
        </Field>
    );
};

interface FFSelectProps {
    fieldName: string;
    options: Array<string | number>;
}

export const FFSelect: FC<SelectProps & FFSelectProps> = (selectProps) => {
    const { fieldName, options, ...rest } = selectProps;
    return (
        <Field name={fieldName}>
            {(props) => (
                <FormControl style={{ minWidth: 150 }}>
                    <InputLabel>{rest.label}</InputLabel>
                    <Select {...props.input} {...rest}>
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}
        </Field>
    );
};
