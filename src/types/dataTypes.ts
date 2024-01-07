import { FilterValues } from "helpers/filterValues";

export type Filter = {
  filter: FilterValues;
  name: string;
  imgUrl: string;
};

export type Quote = {
  author: string;
  quote: string;
};

export type Subscription = {
  message: string;
};
