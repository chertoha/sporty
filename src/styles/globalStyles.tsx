import React from "react";
import { GlobalStyles } from "@mui/material";
import { theme } from "./theme";

export default (
  <GlobalStyles
    styles={{
      body: {
        backgroundColor: theme.palette.bg?.main,
      },

      ul: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
      },
    }}
  />
);
