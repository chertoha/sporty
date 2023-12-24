import { colors, createTheme, PaletteColorOptions } from "@mui/material";

const theme = createTheme({
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
