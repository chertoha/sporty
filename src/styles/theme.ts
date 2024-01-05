import { BorderColor } from "@mui/icons-material";
import { colors, createTheme } from "@mui/material";

export const theme = createTheme({
  //   status: {
  //     danger: orange[500],
  //   },
  // shadows: ["none"],

  palette: {
    secondary: {
      main: colors.orange[500],
    },

    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },

  components: {
    // MuiButtonBase: {
    //   defaultProps: { disableRipple: true },
    // },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        // root: {
        // textTransform: "none",
        // borderColor: "#ffffff",
        // borderRadius: 30,
        // color: "#ffffff",
        // backgroundColor: "transparent",
        // "&:hover": {
        //   backgroundColor: "#ffffff",
        //   borderColor: "#ffffff",
        //   color: "#000000",
        // },
        // },

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
        }),
      },
    },
  },
});
