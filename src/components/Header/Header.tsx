import { Container } from "@mui/material";
import React, { FC } from "react";

interface IHeaderProps {
  //...
}

const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <Container sx={{ outline: "1px solid tomato" }}>Header</Container>
    </header>
  );
};

export default Header;
