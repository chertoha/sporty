import { alpha, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== "inverse",
})<{ inverse: boolean }>(({ theme, inverse }) => ({
  display: "block",
  color: inverse ? theme.palette.text.secondary : theme.palette.text.primary,
  width: 40,
  height: 40,
  padding: 8,
  border: "1px solid",
  borderColor: inverse
    ? alpha(theme.palette.text.secondary, 0.1)
    : alpha(theme.palette.text.primary, 0.1),
  borderRadius: "10px",

  transition: theme.transitions.create(["color", "background-color"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),

  [theme.breakpoints.up("md")]: {
    width: 44,
    height: 44,
  },

  "&>svg": {
    display: "block",
  },

  "&:hover": {
    backgroundColor: inverse ? theme.palette.bg?.main : theme.palette.bg?.dark,
    color: inverse ? theme.palette.text.primary : theme.palette.text.secondary,
  },
}));

export const List = styled("ul")(({ theme }) => ({
  display: "flex",
  columnGap: 12,
}));
