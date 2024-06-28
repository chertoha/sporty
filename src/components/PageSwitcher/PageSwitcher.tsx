import { ROUTES } from "router";
import { Nav, StyledNavLink } from "./PageSwitcher.styled";

const PageSwitcher = () => {
  return (
    <Nav>
      <StyledNavLink to={ROUTES.MUSCLES}>Home</StyledNavLink>
      <StyledNavLink to={ROUTES.FAVORITES}>Favorites</StyledNavLink>
    </Nav>
  );
};

export default PageSwitcher;
