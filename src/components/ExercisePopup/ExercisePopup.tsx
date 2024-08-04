import PropertyList from "./PropertyList";
import Header from "./Header";
import Toolbar from "./Toolbar";

import { FC } from "react";
import { Box } from "@mui/material";
import { Image, Meta, Text, Wrapper } from "./ExercisePopup.styled";
import { useGetExerciseByIdQuery } from "../../redux/exercises/exercisesApi";

interface IExercisePopupProps {
  id: string | number;
  openRatingPopup: () => void;
}

const ExercisePopup: FC<IExercisePopupProps> = ({ id, openRatingPopup }) => {
  const { data: exercise } = useGetExerciseByIdQuery(id);

  if (!exercise) return null;

  return (
    <Wrapper>
      <Meta>
        <Image
          src={exercise.gifUrl}
          alt={exercise.name}
        />
        <Box>
          <Header exercise={exercise} />

          <PropertyList exercise={exercise} />

          <Text variant="body2">{exercise.description}</Text>
        </Box>
      </Meta>

      <Toolbar
        openRatingPopup={openRatingPopup}
        exersise={exercise}
      />
    </Wrapper>
  );
};

export default ExercisePopup;
