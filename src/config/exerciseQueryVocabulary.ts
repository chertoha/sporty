import { FilterKey } from "helpers/filterKey";

export const exerciseQueryVocabulary = (filterKey: FilterKey) => {
  switch (filterKey) {
    case "Body parts":
      return "bodypart";

    case "Muscles":
      return "muscles";

    case "Equipment":
      return "equipment";

    default:
      return "muscles";
  }
};

export type FilterKeyQueryType = ReturnType<typeof exerciseQueryVocabulary>;
