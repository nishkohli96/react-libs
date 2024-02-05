import { Fragment, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { default as MUIAutocomplete } from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
      if (Boolean(inputValue)) {
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
        Boolean(inputValue)
          ? 'No Results Found'
          : 'Type something to fetch results...'
      }
      onChange={(event: any, newValue: ProductInfo | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
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
            style: { padding: '5px 10px', background: 'white' },
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
