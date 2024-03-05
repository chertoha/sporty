export const FILTER_KEY = {
  BODY_PARTS: "Body parts",
  MUSCLES: "Muscles",
  EQUIPMENT: "Equipment",
} as const;

export type FilterKey = (typeof FILTER_KEY)[keyof typeof FILTER_KEY];
