import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
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
      // darker: "#555555",
    },

    text: { primary: "#242424", secondary: "#F4F4F4" },
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }: { ownerState: any }) => ({
          ...(ownerState.variant === "outlined" && {
            backgroundColor: "transparent",
            borderRadius: 30,
            border: "1px solid",
            borderColor: "#ffffff",

            ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
              color: "#ffffff",
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
        root: ({ ownerState }: { ownerState: any }) => ({
          ...{
            textTransform: "none",
            borderColor: "#ffffff",
            borderRadius: 30,
            color: "#ffffff",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "#ffffff",
              borderColor: "#ffffff",
              color: "#000000",
            },
          },

          ...(ownerState.variant === "contained" && {
            borderColor: "#ffffff",
            backgroundColor: "#ffffff",
            color: "#000000",
            border: "1px solid",

            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#ffffff",
              color: "#ffffff",
            },
          }),

          ...(ownerState.variant === "text" && {
            color: "#000000",

            "&:hover": {
              backgroundColor: "#000000",
              color: "#ffffff",
            },
          }),
        }),
      },
    },
  },
});

// Add customized chip, icon button,
