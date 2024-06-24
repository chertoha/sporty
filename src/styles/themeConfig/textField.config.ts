import { Components, Theme } from "@mui/material";

const textFieldConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiTextField: {
    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
        ...(ownerState.variant === "outlined" && {
          backgroundColor: "transparent",
          borderRadius: 30,
          border: "1px solid",
          borderColor: theme.palette.bg.main,
          width: "100%",

          ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
            boxSizing: "border-box",
            padding: "12px 14px",
            height: "42px",
            color: theme.palette.text.secondary,
            fontSize: "14px",
            lineHeight: 1.28,
          },

          ".MuiOutlinedInput-root .MuiOutlinedInput-input:focus": {
            border: "1px solid",
            borderRadius: 30,
            borderColor: theme.palette.bg.main,
          },

          [theme.breakpoints.up("md")]: {
            ".MuiOutlinedInput-root .MuiOutlinedInput-input": {
              fontSize: "16px",
              lineHeight: 1.5,
              height: "48px",
            },
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
};

export default textFieldConfig;
