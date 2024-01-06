import { Container } from "@mui/material";
import React, { FC } from "react";

interface IHeroProps {
  //...
}

const Hero: FC<IHeroProps> = () => {
  return <Container sx={{ outline: "1px solid blue" }}>Hero</Container>;
};

export default Hero;
