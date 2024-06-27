import styles from "./ExerciseCard.styled";
import TrimmedText from "../TrimmedText";

import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as RunnerIcon } from "assets/images/icons/runner.svg";
import { ViewportSize } from "hooks/useWindowSize";

interface ICardNameProps {
  viewport: ViewportSize;
  name: string;
}

const CardName: FC<ICardNameProps> = ({ viewport, name }) => {
  return (
    <Typography
      mt="25px"
      variant="cardtitle"
      display="flex"
      alignItems="center"
      columnGap={8}
    >
      <Box
        component="span"
        sx={styles.runner}
      >
        <RunnerIcon />
      </Box>
      <Box
        component="span"
        sx={styles.name}
      >
        <TrimmedText
          viewport={viewport}
          text={name}
          textLength={[20, 20, 25]}
        />
      </Box>
    </Typography>
  );
};

export default CardName;
