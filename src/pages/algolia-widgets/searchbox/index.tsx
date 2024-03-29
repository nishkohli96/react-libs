import { useState } from 'react';
import { useSearchBox } from 'react-instantsearch';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';

/* https://www.algolia.com/doc/api-reference/widgets/search-box/react/#hook-example */

const SearchBox = () => {
  const { query, refine, isSearchStalled } = useSearchBox();
  const [inputValue, setInputValue] = useState<string>(query);

  function setQuery(newQuery: string) {
    setInputValue(newQuery);
    refine(newQuery);
  }

  const TextFieldEndAdornment = () => (
    <>
      {isSearchStalled ? (
        <CircularProgress color="primary" size={20} />
      ) : (
        <InputAdornment
          // sx={{
          //   cursor: 'pointer',
          //   '&:hover': {
          //     color: (theme) => theme.palette.primary.main,
          //   },
          // }}
          position="end"
          onClick={() => setQuery('')}
        >
          <CloseIcon />
        </InputAdornment>
      )}
    </>
  );

  return (
    <div className="col-12" style={{ marginBottom: 20 }}>
      <TextField
        value={inputValue}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search for a Product..."
        fullWidth
        inputProps={{ style: { padding: '8px 12px' } }}
        InputProps={{ ...(Boolean(inputValue) && { endAdornment: <TextFieldEndAdornment /> }) }}
      />
    </div>
  );
};

export default SearchBox;
