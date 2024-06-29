import Exercises from "components/ExercisesList";
import FilterList from "components/FilterList";

import { FilterKey } from "helpers/filterKey";
import {
  FILTERS_DEFAULT_LIMIT,
  FILTERS_DEFAULT_PAGE,
} from "helpers/queryConfig";
import { FC, useEffect, useState } from "react";
import { useGetFiltersQuery } from "../../redux/filters/filtersApi";
import { exerciseQueryVocabulary } from "config/exerciseQueryVocabulary";
import Loader from "components/Loader";

interface ICardSectionProps {
  filterKey: FilterKey;
}

const CardSection: FC<ICardSectionProps> = ({ filterKey }) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);

  const onOpenExercises = (filterValue: string) => {
    setFilterValue(filterValue);
  };

  useEffect(() => {
    setFilterValue(null);
  }, [filterKey]);

  const { data, isError, isFetching } = useGetFiltersQuery({
    filterKey,
    page: FILTERS_DEFAULT_PAGE,
    limit: FILTERS_DEFAULT_LIMIT,
  });

  if (isError) return <div>Error Component (CardSection)</div>;
  if (!data) return null;

  console.log("res", data.results);

  return (
    <>
      <div>
        {filterValue ? (
          <Exercises
            filterKey={exerciseQueryVocabulary(filterKey)}
            filterValue={filterValue}
          />
        ) : (
          <FilterList
            list={data.results}
            onOpen={onOpenExercises}
          />
        )}
      </div>

      {isFetching && <Loader />}
    </>
  );
};

export default CardSection;
