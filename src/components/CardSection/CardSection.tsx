import { FilterValues, filterValues } from "helpers/filterValues";
import {
  FILTERS_DEFAULT_LIMIT,
  FILTERS_DEFAULT_PAGE,
} from "helpers/queryConfig";
import React, { FC } from "react";
import { useGetFiltersQuery } from "../../redux/filters/filtersApi";
// import { ROUTES } from "router";

interface ICardSectionProps {
  //   route: (typeof ROUTES)[keyof Omit<typeof ROUTES, "FAVORITES">];
  filter: FilterValues;
}

const CardSection: FC<ICardSectionProps> = ({ filter }) => {
  //   if (route === ROUTES.HOME) return <div>Filter cards</div>;

  const { data, isError, isFetching } = useGetFiltersQuery({
    filter,
    page: FILTERS_DEFAULT_PAGE,
    limit: FILTERS_DEFAULT_LIMIT,
  });

  if (isFetching) return <div>Loader component...</div>;
  if (isError) return <div>Error Component</div>;
  if (!data) return null;

  console.log(data);

  return <div>Exercise card - </div>;
};

export default CardSection;
