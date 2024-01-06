import { Box, Container } from "@mui/material";
import React, { FC } from "react";

interface IHeroProps {
  //...
}

const Hero: FC<IHeroProps> = () => {
  return (
    <Box component="section">
      <Container sx={{ outline: "1px solid blue" }}>Hero</Container>
    </Box>
  );
};

export default Hero;
