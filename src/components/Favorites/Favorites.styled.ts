import { SxProps } from "@mui/material";

const wrapper: SxProps = {
  display: "flex",
  flexDirection: {
    xs: "column",
    xl: "row",
  },
  gap: {
    xs: "40px",
    md: "64px",
    xl: "16px",
  },
};

const cards: SxProps = {
  mt: {
    xs: "40px",
    md: "64px",
    xl: 0,
  },

  width: {
    xs: "100%",
    xl: 850,
  },
  flexShrink: 0,
  outline: "1px solid red",
};

const styles = { wrapper, cards };
export default styles;
