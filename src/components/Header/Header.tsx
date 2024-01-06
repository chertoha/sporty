import { Container, styled } from "@mui/material";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "router";

interface IHeaderProps {
  //...
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  // ...theme.components?.MuiLink,
  // color: "red",
  "&.active": { color: "red" },
}));

const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <Container sx={{ outline: "1px solid tomato" }}>
        Header
        <StyledNavLink to={ROUTES.HOME}> Home</StyledNavLink>
        <StyledNavLink to={ROUTES.FAVORITES}> Favorites</StyledNavLink>
      </Container>
    </header>
  );
};

export default Header;
