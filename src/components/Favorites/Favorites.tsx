import { Box, Container, Stack } from "@mui/material";
import React, { FC } from "react";

interface IFavoritesProps {
  //...
}

const Favorites: FC<IFavoritesProps> = () => {
  return (
    <Box component="section">
      <Container sx={{ outline: "1px solid tomato" }}>
        <Stack direction={{ xs: "column", xl: "row" }} spacing={{ xl: 16 }}>
          <Box sx={{ outline: "1px solid green", width: "100%" }}>Quotes</Box>

          <Box
            sx={{
              width: {
                xs: "100%",
                xl: 850,
              },
              flexShrink: 0,
              outline: "1px solid red",
            }}
          >
            Cards
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Favorites;
