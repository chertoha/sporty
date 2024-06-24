import { SxProps, Theme } from "@mui/material";
import { theme } from "styles/theme";

export const footer: SxProps<Theme> = {
  backgroundColor: theme.palette.bg?.dark,
  paddingTop: {
    xs: "40px",
    md: "64px",
  },
  paddingBottom: {
    xs: "10px",
    md: "16px",
  },
};

export const wrapper: SxProps<Theme> = {
  display: { md: "flex" },
  columnGap: { md: "114px", xl: "158px" },
};

export const subscription: SxProps<Theme> = {
  width: { xs: "100%", md: "352px" },
  mt: { xs: "20px", md: "32px", xl: 0 },
};

export const text: SxProps<Theme> = {
  flexShrink: 0,
  width: { xl: "595px" },
  color: theme.palette.text.secondary,
  fontSize: {
    xs: "38px",
    md: "56px",
    lineHeight: { xs: 1.15, md: 1.07 },
  },
  letterSpacing: "0.02em",

  "&>span": {
    fontStyle: "italic",
  },
};

export const socials: SxProps<Theme> = {
  mt: {
    xs: "20px",
    md: "32px",
  },
};

export const meta: SxProps<Theme> = {
  mt: {
    xs: "40px",
    md: 0,
  },
  display: { xl: "flex" },
  columnGap: { xl: "115px" },
  width: { xl: "100%" },
};
