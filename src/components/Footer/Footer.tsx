import { Container } from "@mui/material";
import React, { FC } from "react";

interface IFooterProps {
  //...
}

const Footer: FC<IFooterProps> = () => {
  return (
    <footer>
      <Container sx={{ outline: "1px solid red" }}>Footer</Container>
    </footer>
  );
};

export default Footer;
