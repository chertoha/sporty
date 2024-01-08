import {
  EXERCISES_DEFAULT_LIMIT,
  EXERCISES_DEFAULT_PAGE,
} from "helpers/queryConfig";
import React, { FC, useEffect } from "react";
import {
  useGetExerciseByIdQuery,
  useGetExercisesQuery,
  useRateExerciseMutation,
} from "../../redux/exercises/exercisesApi";

interface IExercisesProps {
  //...
}

const Exercises: FC<IExercisesProps> = () => {
  /* --------------------------------------------------------------------- */
  const { data, isError, isFetching } = useGetExercisesQuery({
    muscles: "",
    bodypart: "cardio",
    equipment: "",
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

  return <div>Exercises component</div>;
};

export default Exercises;
