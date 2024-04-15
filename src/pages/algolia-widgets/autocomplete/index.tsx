import { Fragment, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { default as MUIAutocomplete } from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { fetchAlgoliaData } from './algolia.service';
import { ProductInfo } from '../types';

const Autocomplete = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [value, setValue] = useState<ProductInfo | null>(null);
  const [options, setOptions] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    /**
     *  Implementation of a debounce function, ie this
     *  function will only call once in every 500 ms.
     */
    const fetchProducts = setTimeout(async () => {
      if (inputValue) {
        setLoading(true);
        const products = await fetchAlgoliaData(inputValue);
        setOptions(products ?? []);
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(fetchProducts);
  }, [inputValue]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <MUIAutocomplete
      id="search-on-type"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      filterOptions={x => x}
      noOptionsText={
        inputValue
          ? 'No Results Found'
          : 'Type something to fetch results...'
      }
      onChange={(_, newValue: ProductInfo | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          value={inputValue}
          fullWidth
          variant="outlined"
          placeholder="Search for products in Autocomplete...."
          InputProps={{
            ...params.InputProps,
            style: {
              padding: '5px 10px',
              background: 'white'
            },
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {Boolean(inputValue) && !loading && (
                  <IconButton
                    onClick={() => {
                      setInputValue('');
                      setValue(null);
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}
              </Fragment>
            )
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
