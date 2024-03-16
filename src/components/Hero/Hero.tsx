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
            gridTemplateColumns: "1fr auto",
            gridTemplateAreas: {
              xs: `"head" "image" "tags"`,
              xl: `"head tags" "image image"`,
            },
          }}
        >
          <Box sx={{ gridArea: "head", outline: "1px solid gray" }}>
            Heading
          </Box>
          <Box
            sx={{
              gridArea: "tags",
              outline: "1px solid red",
              justifySelf: {
                xs: "center",
                md: "flex-end",
                xl: "inherit",
              },
            }}
          >
            Tags
          </Box>
          <Box sx={{ gridArea: "image", outline: "1px solid green" }}>
            Image
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
