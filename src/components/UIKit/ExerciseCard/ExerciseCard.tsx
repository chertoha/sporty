import {
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { ReactComponent as StarIcon } from "assets/images/icons/star.svg";
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import { ReactComponent as RunnerIcon } from "assets/images/icons/runner.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";
import { Exercise } from "types/dataTypes";
import { ViewportSize } from "hooks/useWindowSize";
import TrimmedText from "../TrimmedText";
import ModalWindow from "components/ModalWindow";

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
  exercise: { _id, bodyPart, burnedCalories, name, rating, time, target },
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Box
      sx={{
        bgcolor: "bg.light",
        borderRadius: "15px",
        padding: [8],
      }}
    >
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
            sx={{
              textTransform: "uppercase",
              "& .MuiChip-label": {
                px: [4],
                py: "5px",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 1.33,
              },
            }}
            label="WORKOUT"
            variant="outlined"
          />

          {type === "exercise" ? (
            <Typography
              variant="body2"
              display="flex"
              alignItems="center"
              columnGap={1}
            >
              {rating.toFixed(1)}
              <Box
                component="span"
                display="flex"
                alignItems="center"
                justifyContent="center"
                pb="3px"
              >
                <StarIcon fill="#EEA10C" />
              </Box>
            </Typography>
          ) : (
            <IconButton
              aria-label="delete"
              sx={{
                color: "text.primary",
                transitionProperty: "color, background-color",
                transitionDuration: "300ms",
                transitionTimingFunction: "ease-in-out",
                "&.MuiButtonBase-root.MuiIconButton-root:hover": {
                  bgcolor: "bg.dark",
                  color: "text.secondary",
                },
              }}
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
          sx={{
            fontSize: 16,
            fontWeight: 400,
            px: [6],
          }}
          endIcon={<ArrowIcon />}
          onClick={open}
        >
          Start
        </Button>
      </Stack>

      <Typography
        mt={{ xs: "25px", md: "30px" }}
        variant="cardtitle"
        display="flex"
        alignItems="center"
        columnGap={8}
      >
        <Box
          component="span"
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            bgcolor: "bg.dark",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "text.secondary",
          }}
        >
          <RunnerIcon />
        </Box>
        <Box
          component="span"
          sx={{
            "&::first-letter": { textTransform: "uppercase" },
          }}
        >
          <TrimmedText
            viewport={viewport}
            text={name}
            textLength={[20, 20, 25]}
          />
        </Box>
      </Typography>

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

      <ModalWindow
        isOpen={isOpen}
        close={close}
      >
        <Box> Modal window</Box>
      </ModalWindow>
    </Box>
  );
};

export default ExerciseCard;
