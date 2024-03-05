import React from "react";
import { GlobalStyles } from "@mui/material";
import { theme } from "./theme";

export default (
  <GlobalStyles
    styles={{
      // h1: { color: "red" },
      body: {
        backgroundColor: theme.palette.bg?.main,
        // fontFamily: theme.typography.fontFamily,
      },

      ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
      },
    }}
  />
);
