import PaginatedFilter from "components/PaginatedFilter";
import PaginatedExercises from "components/PaginatedExercises";

import { FilterKey } from "helpers/filterKey";
import { FC, useEffect, useState } from "react";
import { exerciseQueryVocabulary } from "config/exerciseQueryVocabulary";

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

  return (
    <div>
      {filterValue ? (
        <PaginatedExercises
          filterKey={exerciseQueryVocabulary(filterKey)}
          filterValue={filterValue}
        />
      ) : (
        <PaginatedFilter
          onOpenExercises={onOpenExercises}
          filterKey={filterKey}
        />
      )}
    </div>
  );
};

export default CardSection;
