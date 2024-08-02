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
    xl: "826px",
  },
  flexShrink: 0,
};

const quote: SxProps = {
  width: {
    xs: "100%",
    xl: "auto",
  },
};

const notFound: SxProps = {
  display: "flex",
  justifyContent: "center",
  pt: {
    md: "64px",
    xl: "114px",
  },
};

const notFoundText: SxProps = {
  maxWidth: "554px",
  textAlign: "center",
  fontSize: { xs: 14, md: 18 },
  lineHeight: { xs: 1.28, md: 1.33 },
};

const styles = { wrapper, cards, quote, notFound, notFoundText };
export default styles;
