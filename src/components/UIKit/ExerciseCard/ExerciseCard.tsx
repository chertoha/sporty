import ExercisePopup from "components/ExercisePopup";
import CardData from "./CardData";
import CardName from "./CardName";
import CardHeader from "./CardHeader";
import ModalWindow from "components/ModalWindow";

import { FC } from "react";
import { Box } from "@mui/material";
import { Exercise } from "types/dataTypes";
import { useModalWindow } from "hooks/useModalWindow";
import { ViewportSize } from "hooks/useWindowSize";

interface IExerciseCardProps {
  type?: "exercise" | "favorite";
  onStart: () => void;
  onDelete?: () => void;
  exercise: Exercise;
  viewport: ViewportSize;
}

const ExerciseCard: FC<IExerciseCardProps> = ({
  type = "exercise",
  viewport,
  exercise,
}) => {
  const { _id, name, rating } = exercise;
  const { isOpen, close, open } = useModalWindow();

  return (
    <Box
      sx={{
        bgcolor: "bg.light",
        borderRadius: "15px",
        padding: [8],
      }}
    >
      <CardHeader
        type={type}
        rating={rating}
        open={open}
      />

      <CardName
        viewport={viewport}
        name={name}
      />

      <CardData
        viewport={viewport}
        exercise={exercise}
      />

      <ModalWindow
        isOpen={isOpen}
        close={close}
      >
        <ExercisePopup />
      </ModalWindow>
    </Box>
  );
};

export default ExerciseCard;
