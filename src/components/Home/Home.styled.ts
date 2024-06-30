import { SxProps } from "@mui/material";

const main: SxProps = {
  pt: { xs: 20, md: 32 },
};

const exercises: SxProps = {
  flexDirection: { xs: "column", xl: "row" },
  alignItems: { xl: "center" },
};

const nav: SxProps = {
  mt: { xs: "20px", md: "32px", xl: 0 },
  display: { md: "flex" },
  alignItems: "center",
  justifyContent: { md: "space-between", xl: "unset" },
  columnGap: { xl: "30px" },
};

const cards: SxProps = {
  mt: {
    xs: "20px",
    md: "32px",
  },
};

const filter: SxProps = {
  width: {
    xs: "100%",
    xl: 900,
  },
  flexShrink: 0,
};

const quote: SxProps = {
  width: "100%",
};

const styles = { main, exercises, nav, cards, filter, quote };

export default styles;
