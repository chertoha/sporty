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

  //Breakpoints
  breakpoints: {
    values: {
      xs: 0,
      sm: breakpoints.mobile,
      md: breakpoints.tablet,
      lg: 1080,
      xl: breakpoints.desktop,
    },
  },

  //Spacing
  spacing: 2,

  //Palette
  palette: {
    bg: {
      main: "#F4F4F4",
      dark: "#242424",
      light: "#FFFFFF",
      contrastText: "#242424",
      // darker: "#555555",
    },

    text: { primary: "#242424", secondary: "#F4F4F4" },
  },

  //Components
  components: {
    ...textFieldConfig,
    ...buttonConfig,
    ...chipConfig,
    ...typographyConfig,
    ...containerConfig,
  },
});

/*
Dark colors
#242424 black



*/
