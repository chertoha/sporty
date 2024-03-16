import { Box, Container } from "@mui/material";
import Tag from "components/UIKit/Tag";
import { FC } from "react";

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
        <Tag />
      </Container>
    </Box>
  );
};

export default Hero;
