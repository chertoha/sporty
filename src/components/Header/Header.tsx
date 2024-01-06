import { Container } from "@mui/material";
import React, { FC } from "react";

interface IHeaderProps {
  //...
}

const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <Container>Header</Container>
    </header>
  );
};

export default Header;
