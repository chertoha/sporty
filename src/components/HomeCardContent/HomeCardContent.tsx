import { Box, Container } from "@mui/material";
import React, { FC } from "react";

interface IHomeCardContentProps {
  //...
}

const HomeCardContent: FC<IHomeCardContentProps> = () => {
  return (
    <Box component="section">
      <Container sx={{ outline: "1px solid grey" }}>HomeCardContent</Container>
    </Box>
  );
};

export default HomeCardContent;
