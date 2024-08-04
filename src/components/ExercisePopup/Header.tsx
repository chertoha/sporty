import styles, { Heading } from "./ExercisePopup.styled";
import RateBar from "components/UIKit/RateBar";

import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Exercise } from "types/dataTypes";

interface IHeaderProps {
  exercise: Exercise;
}

const Header: FC<IHeaderProps> = ({ exercise }) => {
  return (
    <>
      <Heading>{exercise.name}</Heading>

      <Box sx={styles.stars}>
        <Typography
          variant="body2"
          mr={1}
        >
          {exercise.rating.toFixed(1)}
        </Typography>

        <RateBar value={exercise.rating} />
      </Box>
    </>
  );
};

export default Header;
