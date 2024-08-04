import ExercisesList from "components/ExercisesList";
import Paginator from "components/Paginator";
import Loader from "components/Loader";

import { FC, useState } from "react";
import { Box } from "@mui/material";
import { useGetExercisesQuery } from "../../redux/exercises/exercisesApi";
import { EXERCISES_DEFAULT_LIMIT } from "helpers/queryConfig";
import { FilterKeyQueryType } from "config/exerciseQueryVocabulary";
import { useSelector } from "react-redux";
import { selectSearch } from "../../redux/search/selectors";

interface IPaginatedExercisesProps {
  filterKey: FilterKeyQueryType;
  filterValue: string;
}

const PaginatedExercises: FC<IPaginatedExercisesProps> = ({
  filterKey,
  filterValue,
}) => {
  const [page, setPage] = useState<number>(1);
  const query = useSelector(selectSearch);

  const { data, isError, isFetching } = useGetExercisesQuery({
    muscles: "",
    bodypart: "",
    equipment: "",
    [filterKey]: filterValue,
    keyword: query,
    page,
    limit: EXERCISES_DEFAULT_LIMIT,
  });

  if (isError) return <div>Error Component (Exercises)</div>;
  if (!data) return null;

  return (
    <>
      <div>
        <ExercisesList exercises={data.results} />

        <Box sx={{ mt: { xs: "20px", md: "32px" } }}>
          <Paginator
            currentPage={page}
            nearbyQtyPages={1}
            perPage={EXERCISES_DEFAULT_LIMIT}
            totalItems={data.totalPages * EXERCISES_DEFAULT_LIMIT}
            onPageClick={page => {
              setPage(page);
            }}
            hasArrows={false}
          />
        </Box>
      </div>

      {isFetching && <Loader />}
    </>
  );
};

export default PaginatedExercises;
