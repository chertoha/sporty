import { FC } from "react";
import { ReactComponent as LogoIcon } from "assets/images/icons/logo.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "router";
import { styled } from "@mui/material";

interface ILogoProps {
  //...
}

const StyleLink = styled(Link)(({ theme }) => ({
  color: "currentColor",
}));

const Logo: FC<ILogoProps> = () => {
  return (
    <StyleLink to={ROUTES.HOME}>
      <LogoIcon />
    </StyleLink>
  );
};

export default Logo;
