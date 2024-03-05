import { Components, Theme } from "@mui/material";

const buttonConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },

    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
        ...{
          textTransform: "none",
          borderColor: theme.palette.bg.main,
          borderRadius: 30,
          color: theme.palette.text.secondary,
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.palette.bg.main,
            borderColor: theme.palette.bg.main,
            color: theme.palette.text.primary,
          },
        },

        ...(ownerState.variant === "contained" && {
          borderColor: theme.palette.bg.main,
          backgroundColor: theme.palette.bg.main,
          color: theme.palette.text.primary,
          border: "1px solid",

          "&:hover": {
            backgroundColor: "transparent",
            borderColor: theme.palette.bg.main,
            color: theme.palette.text.secondary,
          },
        }),

        ...(ownerState.variant === "text" && {
          color: theme.palette.text.primary,
          transitionProperty: "background-color, color",
          // transitionDuration: "300ms",
          transitionTimingFunction: "ease-in-out",

          "&:hover": {
            backgroundColor: theme.palette.bg.dark,
            color: theme.palette.text.secondary,
          },
        }),
      }),
    },
  },
};

export default buttonConfig;
