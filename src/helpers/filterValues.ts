export const filterValues = {
  BODY_PARTS: "Body parts",
  MUSCLES: "Muscles",
  EQUIPMENT: "Equipment",
} as const;

export type FilterValues = (typeof filterValues)[keyof typeof filterValues];
