import { FormControl, InputAdornment } from "@mui/material";
import { ReactComponent as SearchIcon } from "assets/images/icons/search.svg";
import { SearchField } from "./Search.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "../../redux/search/selectors";
import { updateSearch } from "../../redux/search/slice";

const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearch);

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
        value={value}
        onChange={e => dispatch(updateSearch(e.target.value))}
      />
    </FormControl>
  );
};

export default Search;
