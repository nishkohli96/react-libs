import { FC } from 'react';
import {
  FormControl,
  FormHelperText,
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

export const FFTextField: FC<TextFieldProps & FFTextFieldProps> = tfProps => {
  const { fieldName, ...rest } = tfProps;
  return (
    <Field name={fieldName}>
      {({ input, meta }) => {
        const isErr = Boolean(meta.error && meta.touched);
        return (
          <TextField
            name={input.name}
            value={input.value}
            onChange={e => {
              input.onChange(e);
              rest.onChangeFn && rest.onChangeFn(e);
            }}
            error={isErr}
            helperText={isErr && meta.error}
            {...rest}
          />
        );
      }}
    </Field>
  );
};

interface FFSelectProps {
  fieldName: string;
  options: Array<string | number>;
}

export const FFSelect: FC<SelectProps & FFSelectProps> = selectProps => {
  const { fieldName, options, ...rest } = selectProps;
  return (
    <Field name={fieldName}>
      {({ input, meta }) => {
        const isErr = Boolean(meta.error && meta.touched);
        return (
          <FormControl error={isErr} style={{ minWidth: 150 }}>
            <InputLabel>
              {rest.label}
            </InputLabel>
            <Select {...input} {...rest}>
              {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {isErr && meta.error}
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};
