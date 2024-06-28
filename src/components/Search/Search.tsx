import { FormControl, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "assets/images/icons/search.svg";
import { SearchField } from "./Search.styled";

const Search = () => {
  return (
    <FormControl
      fullWidth
      sx={{ m: 1 }}
      variant="outlined"
    >
      <SearchField
        placeholder="Search"
        id="outlined-adornment-weight"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="search"
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
};

export default Search;
