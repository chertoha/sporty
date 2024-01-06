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
      <Box bgcolor="bg.dark">
        Home component
        <Button variant="contained" endIcon={<FavoriteBorderOutlinedIcon />}>
          Add to favorites
        </Button>
        <Button variant="outlined">Give a rating</Button>
        <FormControl>
          <TextField
            variant="outlined"
            placeholder="Email"
            type="email"
            sx={{
              "& .MuiOutlinedInput-input": { py: 3, px: 8, fontSize: "xs" },
            }}
          />

          <TextField
            variant="outlined"
            placeholder="Your comment"
            multiline
            rows={4}
          />
        </FormControl>
      </Box>

      <Button variant="text" endIcon={<ArrowForwardIcon />}>
        Start
      </Button>
    </>
  );
};

export default Home;

// input paddings
// routing for sub routes
