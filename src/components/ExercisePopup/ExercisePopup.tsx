import tempImage from "assets/images/modal-temp.jpg";
import RateBar from "components/UIKit/RateBar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "./ExercisePopup.styled";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";
import {
  Heading,
  Image,
  ItemTitle,
  ItemValue,
  List,
  Meta,
  Text,
  Toolbar,
  Wrapper,
} from "./ExercisePopup.styled";

const ExercisePopup = () => {
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
          <Heading>Air bake</Heading>

          <Box sx={styles.stars}>
            <Typography
              variant="body2"
              mr={1}
            >
              {rateValue?.toFixed(1)}
            </Typography>

            <RateBar
              value={rateValue}
              setValue={setRateValue}
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
          sx={styles.favorites}
          onClick={toggleFavorite}
          variant="contained"
          endIcon={isFavorite ? <TrashIcon /> : <FavoriteBorderOutlinedIcon />}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </Button>
        <Button
          sx={styles.give}
          variant="outlined"
        >
          Give a rating
        </Button>
      </Toolbar>
    </Wrapper>
  );
};

export default ExercisePopup;
