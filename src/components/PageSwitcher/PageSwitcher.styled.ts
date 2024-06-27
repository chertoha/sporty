import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Nav = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "8px 0",
    width: "233px",
    columnGap: 6,
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.bg?.dark,
    borderRadius: "100px",
  },
  [theme.breakpoints.up("xl")]: { width: "265px" },
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  padding: "6px 12px",
  borderRadius: "100px",
  color: theme.palette.text.secondary,
  transition: theme.transitions.create(["background-color"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),

  "&:hover": {
    backgroundColor: "#454444",
  },

  "&.active, &active:hover": {
    backgroundColor: theme.palette.bg?.light,
    color: theme.palette.text.primary,
  },
}));
