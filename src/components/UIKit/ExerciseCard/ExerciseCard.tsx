import ExercisePopup from "components/ExercisePopup";
import CardData from "./CardData";
import CardName from "./CardName";
import CardHeader from "./CardHeader";
import ModalWindow from "components/ModalWindow";

import { FC, useState } from "react";
import { Box } from "@mui/material";
import { Exercise } from "types/dataTypes";
import { useModalWindow } from "hooks/useModalWindow";
import { ViewportSize } from "hooks/useWindowSize";
import RatingPopup from "components/RatingPopup";

interface IExerciseCardProps {
  type?: "exercise" | "favorite";
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

  const [shouldRate, setShouldRate] = useState<boolean>(false);
  const openRatingPopup = () => setShouldRate(true);
  const closeRatingPopup = () => setShouldRate(false);

  const onCloseHandler = () => {
    closeRatingPopup();
    close();
  };

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
        close={onCloseHandler}
        sizes={shouldRate ? [335, 430, 430] : undefined}
      >
        {shouldRate ? (
          <RatingPopup closeRatingPopup={closeRatingPopup} />
        ) : (
          <ExercisePopup openRatingPopup={openRatingPopup} />
        )}
      </ModalWindow>
    </Box>
  );
};

export default ExerciseCard;
