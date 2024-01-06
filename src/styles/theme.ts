import { Theme } from "@emotion/react";
import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 2,

  palette: {
    // secondary: {
    //   main: colors.orange[500],
    // },
    // neutral: {
    //   main: colors.grey[500],
    //   darker: colors.grey[700],
    // },

    bg: {
      main: "#F4F4F4",
      dark: "#242424",
      light: "#FFFFFF",
      contrastText: "#242424",
      // darker: "#555555",
    },

    text: { primary: "#242424", secondary: "#F4F4F4" },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "transparent",
            borderRadius: 30,
            border: "1px solid",
            borderColor: theme.palette.bg.main,

            ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
              color: theme.palette.text.secondary,
            },

            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent",
            },
            "& .MuiOutlinedInput-root.Mui-focused  .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "transparent",
              },
          }),

          ...(ownerState.multiline && {
            borderRadius: 15,
          }),
        }),
      },
    },

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

            "&:hover": {
              backgroundColor: theme.palette.bg.dark,
              color: theme.palette.text.secondary,
            },
          }),
        }),
      },
    },
  },
});

// Add customized chip, icon button,
// add typography
