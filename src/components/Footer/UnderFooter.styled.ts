import { SxProps, Theme } from "@mui/material";

export const grid: SxProps<Theme> = {
  display: "grid",

  color: "#C6CDD1",
  letterSpacing: "-0.02em",

  gridTemplateColumns: {
    xs: "auto 1fr",
    md: "auto auto 1fr",
  },

  gridTemplateRows: {
    xs: "1fr 1fr",
    md: "1fr",
  },
  rowGap: "10px",

  mt: { xs: "120px", md: "64px", lg: "70px" },
};

export const rights: SxProps<Theme> = {
  gridColumn: {
    xs: "span 2",
    md: "auto",
  },
};

export const policy: SxProps<Theme> = {
  ml: {
    md: "78px",
    xl: "122px",
  },
};

export const copy: SxProps<Theme> = {
  justifySelf: { xs: "end" },
  width: { xl: "352px" },
};
