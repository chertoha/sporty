import PaginatedFilter from "components/PaginatedFilter";
import PaginatedExercises from "components/PaginatedExercises";

import { FilterKey } from "helpers/filterKey";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { exerciseQueryVocabulary } from "config/exerciseQueryVocabulary";
import { useOutletContext } from "react-router";

interface ICardSectionProps {
  filterKey: FilterKey;
}

type OutletContext = {
  setIsSearchVisible: Dispatch<SetStateAction<boolean>>;
};

const CardSection: FC<ICardSectionProps> = ({ filterKey }) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);

  const { setIsSearchVisible } = useOutletContext<OutletContext>();

  const onOpenExercises = (filterValue: string) => {
    setFilterValue(filterValue);
  };

  useEffect(() => {
    setFilterValue(null);
  }, [filterKey]);

  useEffect(() => {
    setIsSearchVisible(!!filterValue);
  }, [filterValue, setIsSearchVisible]);

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
