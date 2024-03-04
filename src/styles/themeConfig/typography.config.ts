import { Components, Theme } from "@mui/material/styles";

const typographyConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
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
          fontFamily: ["DM Sans", "sans-serif"].join(","),
          fontWeight: 400,
          [theme.breakpoints.up("md")]: { fontSize: 24, lineHeight: 1.33 },
        }),

        // body1
        ...(ownerState.variant === "body1" && {
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.286,
        }),

        // body2
        ...(ownerState.variant === "body2" && {
          fontSize: 12,
          fontWeight: 400,
          lineHeight: 1.5,
        }),
      }),
    },
  },
};

export default typographyConfig;
