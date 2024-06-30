import { SxProps, Theme, alpha } from "@mui/material";
import { flexAlign } from "styles/atomics";

const wrapper: SxProps = {
  padding: {
    xs: "40px 20px",
    md: "40px 40px",
  },
};

const title: SxProps<Theme> = theme => ({
  color: alpha(theme.palette.text.secondary, 0.4),
});

const rate: SxProps = {
  ...flexAlign,
  position: "relative",
  mt: "8px",
};

const email: SxProps = {
  position: "relative",
  display: "block",
  mt: {
    xs: "20px",
    md: "32px",
  },

  ".MuiOutlinedInput-root .MuiOutlinedInput-input:focus": {
    border: "none",
  },
  "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline": {
    borderRadius: "30px",
    border: "2px solid",
    borderColor: "bg.main",
  },
};

const comment: SxProps = {
  display: "block",
  mt: "28px",

  "&>div .MuiOutlinedInput-root .MuiOutlinedInput-input:focus": {
    border: "none",
  },

  "&>div .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
    {
      borderRadius: "15px",
      border: "2px solid",
      borderColor: "bg.main",
    },
};

const submit: SxProps = {
  mt: "28px",
  display: "block",
  width: "100%",
  border: "2px solid transparent",

  "&:hover": {
    borderColor: "text.secondary",
  },
};

const styles = { wrapper, title, rate, email, comment, submit };

export default styles;
