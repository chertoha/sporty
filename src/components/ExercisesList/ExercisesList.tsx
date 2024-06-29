import ExerciseCard from "components/UIKit/ExerciseCard";

import { FC } from "react";
import { Grid } from "@mui/material";
import { useWindowSize } from "hooks/useWindowSize";
import { Exercise } from "types/dataTypes";

interface IExercisesListProps {
  exercises: Exercise[];
}

const ExercisesList: FC<IExercisesListProps> = ({ exercises }) => {
  const viewport = useWindowSize();

  return (
    <Grid
      container
      component="ul"
      columnSpacing={{ md: 8 }}
      rowSpacing={{ xs: 10, md: 16 }}
    >
      {exercises.map(exercise => (
        <Grid
          key={exercise._id}
          component="li"
          item
          xs={12}
          md={6}
        >
          <ExerciseCard
            viewport={viewport}
            exercise={exercise}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExercisesList;
