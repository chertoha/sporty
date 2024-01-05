import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { FC } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface IHomeProps {
  //...
}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#242424", color: "white" }}>
        Home component
        <Button variant="text" endIcon={<ArrowForwardIcon />}>
          Start
        </Button>
        <Button variant="contained" endIcon={<FavoriteBorderOutlinedIcon />}>
          Add to favorites
        </Button>
        <Button variant="outlined">Give a rating</Button>
        <FormControl>
          <TextField variant="outlined" placeholder="Email" type="email" />

          <TextField
            variant="outlined"
            placeholder="Your comment"
            multiline
            rows={4}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Home;
