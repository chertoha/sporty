import {
  Box,
  Button,
  Chip,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TestPage = () => {
  return (
    <>
      <Typography variant="subtitle2">subtitle2</Typography>

      <Typography variant="cardtitle">cardtitle</Typography>

      <Typography
        variant="body1"
        component="h1"
      >
        Typography
      </Typography>

      <Box bgcolor="bg.dark">
        Home component
        <Button
          variant="contained"
          endIcon={<FavoriteBorderOutlinedIcon />}
        >
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

      <Button
        variant="text"
        endIcon={<ArrowForwardIcon />}
      >
        Start
      </Button>

      <Chip
        label="#Sport"
        variant="outlined"
      />
    </>
  );
};

export default TestPage;
