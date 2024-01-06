import { Components, Theme } from "@mui/material";

const typographyConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        // Map the new variant to render a <h1> by default
        cardtitle: "p",
      },
    },

    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
        // h1
        ...(ownerState.variant === "h1" && {
          fontSize: 38,
          fontWeight: 400,
          [theme.breakpoints.up("md")]: { fontSize: 74 },
        }),

        // h2
        ...(ownerState.variant === "h2" && {
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.357,
          [theme.breakpoints.up("md")]: { fontSize: 44, lineHeight: 1.1 },
        }),

        // cardtitle
        ...(ownerState.variant === "cardtitle" && {
          [theme.breakpoints.up("md")]: { fontSize: 24, lineHeight: 1.33 },
        }),
      }),
    },
  },
};

export default typographyConfig;
