import { FC } from "react";
import { ReactComponent as LogoIcon } from "assets/images/icons/logo.svg";
import { ROUTES } from "router";
import { StyledLink } from "./Logo.styled";

interface ILogoProps {
  inverse?: boolean;
}

const Logo: FC<ILogoProps> = ({ inverse = false }) => {
  return (
    <StyledLink
      to={ROUTES.HOME}
      inverse={inverse}
    >
      <LogoIcon />
    </StyledLink>
  );
};

export default Logo;
