import {
  EXERCISES_DEFAULT_LIMIT,
  EXERCISES_DEFAULT_PAGE,
} from "helpers/queryConfig";
import { FC } from "react";
import {
  // useGetExerciseByIdQuery,
  useGetExercisesQuery,
  // useRateExerciseMutation,
} from "../../redux/exercises/exercisesApi";
import { FilterKeyQueryType } from "config/exerciseQueryVocabulary";
import { Box, Button, Chip, Grid, Stack, Typography } from "@mui/material";
import ExerciseCard from "components/UIKit/ExerciseCard";

interface IExercisesListProps {
  filterKey: FilterKeyQueryType;
  filterValue: string;
}

const ExercisesList: FC<IExercisesListProps> = ({ filterKey, filterValue }) => {
  console.log({ [filterKey]: filterValue });

  /* --------------------------------------------------------------------- */
  const { data, isError, isFetching } = useGetExercisesQuery({
    muscles: "",
    bodypart: "",
    equipment: "",
    [filterKey]: filterValue,
    keyword: "",
    page: EXERCISES_DEFAULT_PAGE,
    limit: EXERCISES_DEFAULT_LIMIT,
  });
  /* --------------------------------------------------------------------- */
  //
  //
  //
  /* --------------------------------------------------------------------- */
  // Get one exercise (for modal exercise window component )
  //   const { data, isError, isFetching } = useGetExerciseByIdQuery(
  //     "64f389465ae26083f39b17c7"
  //   );
  /* --------------------------------------------------------------------- */
  //
  //
  //
  /* --------------------------------------------------------------------- */
  // Get one exercise (for modal exercise window component )

  //   const [rateExercise, { isError }] = useRateExerciseMutation();
  //   useEffect(() => {
  //     rateExercise({
  //       id: "64f389465ae26083f39b17c7",
  //       rate: 2,
  //       email: "a@mf11.com",
  //       review: "Ha ha",
  //     }).then(console.log);
  //   }, []);

  /* --------------------------------------------------------------------- */

  if (isFetching) return <div>Loader component... (Exercises)</div>;
  if (isError) return <div>Error Component (Exercises)</div>;
  if (!data) return null;

  console.log(data);

  return (
    <div>
      <Grid
        container
        component="ul"
        columnSpacing={{ md: 8 }}
        rowSpacing={{ xs: 10, md: 16 }}
      >
        {data.results.map(({ _id }) => (
          <Grid
            key={_id}
            component="li"
            item
            xs={12}
            md={6}
          >
            <ExerciseCard
              onStart={() => {}}
              // type="favorite"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ExercisesList;
