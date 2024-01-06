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
};

export default textFieldConfig;
