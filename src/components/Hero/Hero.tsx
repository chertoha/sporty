import { Box, Container } from "@mui/material";
import React, { FC } from "react";

interface IHeroProps {
  //...
}

const Hero: FC<IHeroProps> = () => {
  return (
    <Box
      component="section"
      sx={{ py: 40 }}
    >
      <Container sx={{ outline: "1px solid blue", height: "100px" }}>
        Hero
      </Container>
    </Box>
  );
};

export default Hero;
