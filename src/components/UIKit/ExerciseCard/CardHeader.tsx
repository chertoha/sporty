import CardRating from "./CardRating";
import styles from "./ExerciseCard.styled";

import { Button, Chip, IconButton, Stack } from "@mui/material";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import { FC } from "react";

interface ICardHeaderProps {
  type: "exercise" | "favorite";
  rating: number;
  open: () => void;
  remove: () => void;
}

const CardHeader: FC<ICardHeaderProps> = ({ type, rating, open, remove }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={type === "exercise" ? 8 : 1}
      >
        <Chip
          size="small"
          sx={styles.chip}
          label="WORKOUT"
          variant="outlined"
        />

        {type === "exercise" ? (
          <CardRating rating={rating} />
        ) : (
          <IconButton
            aria-label="delete"
            sx={styles.trash}
            onClick={remove}
          >
            <TrashIcon
              width={16}
              height={16}
              fill="none"
            />
          </IconButton>
        )}
      </Stack>

      <Button
        sx={styles.start}
        endIcon={<ArrowIcon />}
        onClick={open}
      >
        Start
      </Button>
    </Stack>
  );
};

export default CardHeader;
