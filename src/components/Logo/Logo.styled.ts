import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link, {
  shouldForwardProp: prop => prop !== "inverse",
})<{ inverse: boolean }>(({ theme, inverse }) => ({
  display: "block",
  color: inverse ? theme.palette.bg?.main : theme.palette.bg?.dark,
  width: 132,
  height: 24,
}));
