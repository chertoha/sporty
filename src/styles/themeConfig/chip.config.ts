import { Components, Theme } from "@mui/material";

const chipConfig: Components<Omit<Theme, "components">> | undefined = {
  MuiChip: {
    styleOverrides: {
      root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
        ...(ownerState.variant === "outlined" && {
          borderColor: theme.palette.bg.dark,
          color: theme.palette.text.primary,
          "& .MuiChip-label": { paddingLeft: 0, paddingRight: 0 },
        }),
      }),
    },
  },
};

export default chipConfig;
