import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  //   status: {
  //     danger: orange[500],
  //   },

  palette: {
    secondary: {
      main: colors.orange[500],
    },

    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});
