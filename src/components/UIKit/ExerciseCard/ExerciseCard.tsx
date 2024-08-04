import ExercisePopup from "components/ExercisePopup";
import CardData from "./CardData";
import CardName from "./CardName";
import CardHeader from "./CardHeader";
import ModalWindow from "components/ModalWindow";
import RatingPopup from "components/RatingPopup";
import styles from "./ExerciseCard.styled";

import { FC, useState } from "react";
import { Box } from "@mui/material";
import { Exercise } from "types/dataTypes";
import { useModalWindow } from "hooks/useModalWindow";
import { ViewportSize } from "hooks/useWindowSize";

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
    <Box sx={styles.wrapper}>
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
          <RatingPopup
            id={_id}
            closeRatingPopup={closeRatingPopup}
          />
        ) : (
          <ExercisePopup
            id={_id}
            openRatingPopup={openRatingPopup}
          />
        )}
      </ModalWindow>
    </Box>
  );
};

export default ExerciseCard;
