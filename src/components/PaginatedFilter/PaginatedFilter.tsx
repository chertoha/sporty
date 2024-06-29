import Paginator from "components/Paginator";
import FilterList from "components/FilterList";
import Loader from "components/Loader";

import { FC, useState } from "react";
import { Box } from "@mui/material";
import { useGetFiltersQuery } from "../../redux/filters/filtersApi";
import { FilterKey } from "helpers/filterKey";
import { FILTERS_DEFAULT_LIMIT } from "helpers/queryConfig";

interface IPaginatedFilterProps {
  onOpenExercises: (value: string) => void;
  filterKey: FilterKey;
}

const PaginatedFilter: FC<IPaginatedFilterProps> = ({
  onOpenExercises,
  filterKey,
}) => {
  const [page, setPage] = useState<number>(1);

  const { data, isError, isFetching } = useGetFiltersQuery({
    filterKey,
    page,
    limit: FILTERS_DEFAULT_LIMIT,
  });

  if (isError) return <div>Error Component (CardSection)</div>;
  if (!data) return null;

  console.log("res", data);

  return (
    <>
      <div>
        <FilterList
          list={data.results}
          onOpen={onOpenExercises}
        />

        <Box sx={{ mt: { xs: "20px", md: "32px" } }}>
          <Paginator
            currentPage={page}
            perPage={FILTERS_DEFAULT_LIMIT}
            totalItems={data.totalPages * FILTERS_DEFAULT_LIMIT}
            onPageClick={page => {
              setPage(page);
            }}
            nearbyQtyPages={1}
            hasArrows={false}
          />
        </Box>
      </div>

      {isFetching && <Loader />}
    </>
  );
};

export default PaginatedFilter;
