import { FC } from "react";
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
      SPORTy
    </StyledLink>
  );
};

export default Logo;
