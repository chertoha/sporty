import properties from "utils/data/exercisePropertyList";

import { FC } from "react";
import { ItemTitle, ItemValue, List } from "./ExercisePopup.styled";
import { Exercise, ExerciseKey } from "types/dataTypes";

interface IPropertyListProps {
  exercise: Exercise;
}

const PropertyList: FC<IPropertyListProps> = ({ exercise }) => {
  return (
    <List>
      {properties.map(({ label, key }) => (
        <li key={label}>
          <ItemTitle variant="body2">{label}</ItemTitle>
          <ItemValue variant="body1">
            {key === "burnedCalories"
              ? `${exercise[key as ExerciseKey]}/${exercise.time} min`
              : exercise[key as ExerciseKey]}
          </ItemValue>
        </li>
      ))}
    </List>
  );
};

export default PropertyList;
