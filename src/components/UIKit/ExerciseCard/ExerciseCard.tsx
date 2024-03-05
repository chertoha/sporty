import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ReactComponent as StarIcon } from "assets/images/icons/star.svg";
import { ReactComponent as ArrowIcon } from "assets/images/icons/arrow.svg";
import { ReactComponent as RunnerIcon } from "assets/images/icons/runner.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/trash.svg";

interface IExerciseCardProps {
  type?: "exercise" | "favorite";
  onStart: () => void;
  onDelete?: () => void;
}

const ExerciseCard: FC<IExerciseCardProps> = ({ type = "exercise" }) => {
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
              4.0{" "}
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
                // padding: 0,
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
        3/4 sit-up
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
          312 / 3 min
        </Typography>
        <Typography variant="body2">
          <Box
            component="span"
            color="rgba(36,36,36,0.4)"
          >
            Body part:
          </Box>{" "}
          Waist
        </Typography>
        <Typography variant="body2">
          <Box
            component="span"
            color="rgba(36,36,36,0.4)"
          >
            Target:
          </Box>{" "}
          Abs
        </Typography>
      </Stack>
    </Box>
  );
};

export default ExerciseCard;
