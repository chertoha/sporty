import buttonConfig from "./themeConfig/button.config";
import { createTheme } from "@mui/material";
import textFieldConfig from "./themeConfig/textField.config";
import chipConfig from "./themeConfig/chip.config";
import typographyConfig from "./themeConfig/typography.config";
import containerConfig from "./themeConfig/container.config";

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
};

export const theme = createTheme({
  typography: {
    fontFamily: ["DM Sans", "sans-serif"].join(","),

    cardtitle: {
      fontSize: 20,
      lineHeight: 1,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: breakpoints.mobile,
      md: breakpoints.tablet,
      lg: 1080,
      xl: breakpoints.desktop,
    },
  },

  spacing: 2,

  palette: {
    bg: {
      main: "#F4F4F4",
      dark: "#242424",
      light: "#FFFFFF",
      contrastText: "#242424",
    },

    text: { primary: "#242424", secondary: "#F4F4F4" },
  },

  components: {
    ...textFieldConfig,
    ...buttonConfig,
    ...chipConfig,
    ...typographyConfig,
    ...containerConfig,
  },
});
