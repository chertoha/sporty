import { Filter } from "./dataTypes";

export type FilterResponseData = {
  page: number;
  perPage: number;
  totalPages: number;
  results: Filter[];
};
