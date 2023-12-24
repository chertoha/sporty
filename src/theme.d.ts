// // import { ThemeOptions } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Theme {
//     // status: {
//     //   danger: string;
//     // };
//   }
//   // allow configuration using `createTheme`
//   interface ThemeOptions {
//     // status?: {
//     //   danger?: string;
//     // };
//   }
// }

import { PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    // status: {
    //   danger: string;
    // };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    // status?: {
    //   danger?: string;
    // };
  }

  interface Palette {
    neutral?: PaletteColor;
  }

  interface PaletteColor {
    darker?: string;
  }

  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}
