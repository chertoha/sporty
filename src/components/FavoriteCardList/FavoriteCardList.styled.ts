import { SxProps } from "@mui/material";

const list: SxProps = {
  padding: 0,
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    md: "1fr 1fr",
  },

  rowGap: {
    xs: "20px",
    md: "32px",
  },
  columnGap: "16px",
};

const item: SxProps = { padding: 0 };

const styles = { list, item };
export default styles;
