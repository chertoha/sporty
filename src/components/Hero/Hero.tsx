import { Box, Container } from "@mui/material";
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
        <Box
          sx={{
            display: "grid",
            gridTemplateAreas: `"head tags" "image image"`,
          }}
        >
          <Box
            sx={{ gridArea: "head", flexGrow: "2", outline: "1px solid gray" }}
          >
            Heading
          </Box>
          <Box sx={{ gridArea: "tags", outline: "1px solid red" }}>Tags</Box>
          <Box sx={{ gridArea: "image", outline: "1px solid green" }}>
            Image
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
