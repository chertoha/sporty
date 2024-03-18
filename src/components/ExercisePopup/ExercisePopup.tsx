import { Box, Button, Typography, alpha, styled } from "@mui/material";
import { FC, useState } from "react";
import tempImage from "assets/images/modal-temp.jpg";
import RateBar from "components/UIKit/RateBar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";

interface IExercisePopupProps {
  //...
}

//NEED PLUG FOR EMPTY IMAGE

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "40px 20px",
  color: theme.palette.text.secondary,

  [theme.breakpoints.up("md")]: {
    padding: "32px",
  },
}));

const Meta = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "flex-start",
    columnGap: 32,
  },
}));

const Image = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "auto",
  borderRadius: 12,

  [theme.breakpoints.up("md")]: {
    width: "270px",
  },
}));

const Heaading = styled("h2")(({ theme }) => ({
  marginBottom: 0,
  marginTop: 20,
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: 1,

  [theme.breakpoints.up("md")]: {
    marginTop: 0,
    fontSize: "24px",
    lineHeight: 1.5,
  },
}));

const List = styled("ul")(({ theme }) => ({
  marginTop: 20,
  display: "flex",
  flexWrap: "wrap",
  gap: 20,

  padding: "10px 0",
  borderTop: "1px solid",
  borderBottom: "1px solid",
  borderColor: alpha(theme.palette.text.secondary, 0.2),

  [theme.breakpoints.up("md")]: {
    marginTop: 16,
    padding: "8px 0",
    gap: 16,
  },
}));

const ItemTitle = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.4),
  [theme.breakpoints.up("md")]: {},
}));

const ItemValue = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {},
}));

const Text = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.secondary, 0.6),
  marginTop: 20,

  [theme.breakpoints.up("md")]: { marginTop: 16 },
}));

const Toolbar = styled(Typography)(({ theme }) => ({
  marginTop: 40,

  [theme.breakpoints.up("md")]: {
    marginTop: 64,
    display: "flex",
    justifyContent: "flex-end",
    columnGap: 7,
  },
}));

const ExercisePopup: FC<IExercisePopupProps> = () => {
  const [rateValue, setRateValue] = useState<number | null>(0);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = () => setIsFavorite(prevState => !prevState);

  return (
    <Wrapper>
      <Meta>
        <Image
          src={tempImage}
          alt=""
        />
        <Box>
          <Heaading>Air bake</Heaading>

          <Box
            sx={{ mt: { xs: 5, md: 4 }, display: "flex", alignItems: "center" }}
          >
            <Typography
              variant="body2"
              sx={{ mr: 1 }}
            >
              {rateValue?.toFixed(1)}
            </Typography>
            <RateBar
              value={rateValue}
              setValue={setRateValue}
              // readOnly={false}
            />
          </Box>

          <List>
            <li>
              <ItemTitle variant="body2">Target</ItemTitle>
              <ItemValue variant="body1">Abs</ItemValue>
            </li>
            <li>
              <ItemTitle variant="body2">Body Part</ItemTitle>
              <ItemValue variant="body1">Waist</ItemValue>
            </li>
            <li>
              <ItemTitle variant="body2">Equipment</ItemTitle>
              <ItemValue variant="body1">Body weight</ItemValue>
            </li>
            <li>
              <ItemTitle variant="body2">Popular</ItemTitle>
              <ItemValue variant="body1">150</ItemValue>
            </li>
            <li>
              <ItemTitle variant="body2">Burned calories</ItemTitle>
              <ItemValue variant="body1">323/3 min</ItemValue>
            </li>
          </List>
          <Text variant="body2">
            This refers to your core muscles, which include the rectus
            abdominis, obliques, and transverse abdominis. They're essential for
            maintaining posture, stability, and generating force in many
            movements. Exercises that target the abs include crunches, leg
            raises, and planks.
          </Text>
        </Box>
      </Meta>

      <Toolbar>
        <Button
          sx={{ width: { xs: "100%", md: "auto" } }}
          onClick={toggleFavorite}
          variant="contained"
          endIcon={isFavorite ? <TrashIcon /> : <FavoriteBorderOutlinedIcon />}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
        <Button
          sx={{ mt: { xs: 5, md: 0 }, width: { xs: "100%", md: "auto" } }}
          variant="outlined"
        >
          Give a rating
        </Button>
      </Toolbar>
    </Wrapper>
  );
};

export default ExercisePopup;