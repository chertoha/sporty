import { SxProps, Theme } from "@mui/material";
import { theme } from "styles/theme";

export const text: SxProps<Theme> = {
  color: theme.palette.text.secondary,
  fontSize: { xs: "14px", md: "18px" },
  lineHeight: { xs: 1.28, md: 1.33 },
};

export const control: SxProps<Theme> = {
  display: "block",
  mt: "20px",
};

export const button: SxProps<Theme> = {
  display: "block",
  width: { xs: "100%" },
  mt: "24px",
};
