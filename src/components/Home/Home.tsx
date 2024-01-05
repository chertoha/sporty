import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface IHomeProps {
  //...
}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#242424", color: "white" }}>
        Home component
        <Button variant="contained" endIcon={<FavoriteBorderOutlinedIcon />}>
          Add to favorites
        </Button>
        <Button variant="outlined">Give a rating</Button>
      </Box>
    </>
  );
};

export default Home;
