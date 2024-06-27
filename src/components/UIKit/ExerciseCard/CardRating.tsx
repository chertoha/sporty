import styles from "./ExerciseCard.styled";

import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as StarIcon } from "assets/images/icons/star.svg";

interface ICardRatingProps {
  rating: number;
}

const CardRating: FC<ICardRatingProps> = ({ rating }) => {
  return (
    <Typography
      variant="body2"
      display="flex"
      alignItems="center"
      columnGap={1}
    >
      {rating.toFixed(1)}
      <Box
        component="span"
        sx={styles.star}
      >
        <StarIcon />
      </Box>
    </Typography>
  );
};

export default CardRating;
