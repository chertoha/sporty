import { OutlinedInput, styled } from "@mui/material";

export const SearchField = styled(OutlinedInput)(({ theme }) => ({
  borderRadius: 30,
  height: 44,
  width: "100%",

  [theme.breakpoints.up("md")]: {
    height: 48,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.primary,
  },

  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.text.primary,
  },
}));
