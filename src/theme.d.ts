import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  // interface Theme {
  //   // status: {
  //   //   danger: string;
  //   // };
  //   // palette: Palette;
  // }
  // allow configuration using `createTheme`
  // interface ThemeOptions {
  //   // status?: {
  //   //   danger?: string;
  //   // };
  // }

  interface Palette {
    // neutral?: PaletteColor;
    bg?: Palette["primary"];
  }

  interface PaletteOptions {
    // neutral?: PaletteColorOptions;
    // bg?: PaletteOptions["primary"];
    bg?: PaletteColorOptions["primary"];
  }

  // interface PaletteColor {
  //   // darker?: string;
  // }

  // interface SimplePaletteColorOptions {
  //   // darker?: string;
  // }

  interface TypographyVariants {
    cardtitle: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    cardtitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardtitle: true;
  }
}
