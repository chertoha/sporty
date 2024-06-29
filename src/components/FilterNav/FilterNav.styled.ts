import { SxProps, alpha, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  position: "relative",
  fontSize: 14,
  lineHeight: 1.42,
  color: alpha(theme.palette.text.primary, 0.6),

  [theme.breakpoints.up("md")]: {
    fontSize: 16,
    lineHeight: 1.5,
  },

  "&.active": { color: theme.palette.text.primary },

  "&.active::after": {
    content: '""',
    position: "absolute",
    bottom: "-4px",
    left: 0,
    height: "4px",
    width: "100%",
    borderRadius: "2px",
    backgroundColor: theme.palette.bg?.dark,
  },
}));

const search: SxProps = {
  width: { md: "273px" },
  py: { xs: "20px", md: 0 },
  pt: { md: "5px" },
};

const styles = { search };

export default styles;
