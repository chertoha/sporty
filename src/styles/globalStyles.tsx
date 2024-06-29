import { GlobalStyles } from "@mui/material";
import { theme } from "./theme";

export default (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.bg?.main,

        "&.no-scroll": {
          overflow: "hidden",
        },
      },

      ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
      },

      a: {
        textDecoration: "none",
      },

      button: {
        padding: 0,
        margin: 0,
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      },
    }}
  />
);
