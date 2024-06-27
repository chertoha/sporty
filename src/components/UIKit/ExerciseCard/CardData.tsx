import TrimmedText from "../TrimmedText";

import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { ViewportSize } from "hooks/useWindowSize";
import { Exercise } from "types/dataTypes";

interface ICardDataProps {
  viewport: ViewportSize;
  exercise: Exercise;
}

const CardData: FC<ICardDataProps> = ({
  viewport,
  exercise: { burnedCalories, time, target, bodyPart },
}) => {
  return (
    <Stack
      direction="row"
      mt={{ xs: 8, md: 4 }}
      justifyContent="space-between"
    >
      <Typography variant="body2">
        <Box
          component="span"
          color="rgba(36,36,36,0.4)"
        >
          Burned calories:
        </Box>{" "}
        <TrimmedText
          viewport={viewport}
          text={`${burnedCalories} / ${time} min`}
          textLength={[7, 10, 14]}
        />
      </Typography>

      <Typography variant="body2">
        <Box
          component="span"
          color="rgba(36,36,36,0.4)"
        >
          Body part:
        </Box>{" "}
        <TrimmedText
          viewport={viewport}
          text={bodyPart}
          textLength={[7, 7, 14]}
        />
      </Typography>

      <Typography variant="body2">
        <Box
          component="span"
          color="rgba(36,36,36,0.4)"
        >
          Target:
        </Box>{" "}
        <TrimmedText
          viewport={viewport}
          text={target}
          textLength={[7, 7, 14]}
        />
      </Typography>
    </Stack>
  );
};

export default CardData;
