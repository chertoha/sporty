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

export type Exercise = {
  _id: string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  description: string;
  rating: number;
  burnedCalories: number;
  time: number;
  popularity: number;
};

export type ExerciseData = {
  page: number;
  perPage: number;
  totalPages: number;
  results: Exercise[];
};
