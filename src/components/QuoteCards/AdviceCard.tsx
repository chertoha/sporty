import { Box, Stack, Typography, alpha } from "@mui/material";
import { ReactComponent as DumbbellIcon } from "assets/images/icons/dumbbell.svg";
import styles, {
  AdviceCardIconWrapper,
  AdviceCardWrapper,
  QuoteWrapper,
} from "./QuoteCards.styled";
import { FC } from "react";

interface IAdviceCardProps {
  isFavorites?: boolean;
}

const AdviceCard: FC<IAdviceCardProps> = ({ isFavorites }) => {
  return (
    <AdviceCardWrapper isFavorites={isFavorites}>
      <Stack
        direction={isFavorites ? "column" : "row"}
        spacing={{ xs: "20px", md: "16px" }}
      >
        <AdviceCardIconWrapper isFavorites={isFavorites}>
          <DumbbellIcon />
        </AdviceCardIconWrapper>

        <Box>
          <Typography sx={{ ...styles.title, color: "text.primary" }}>
            110 min
          </Typography>

          <Typography
            sx={theme => ({
              color: alpha(theme.palette.text.primary, 0.6),
              mt: "2px",
            })}
          >
            Daily norm of sports
          </Typography>

          {!isFavorites && (
            <Typography
              className="trim-text-five-row"
              variant="body1"
              sx={styles.adviceText}
            >
              The World Health Organization recommends at least 150 minutes of
              moderate-intensity aerobic physical activity throughout the week
              for adults aged 18-64. However, what happens if we adjust that
              number to 110 minutes every day? While it might seem like a high
              number to hit, dedicating 110 minutes daily to sporting activities
              may offer unparalleled benefits to physical health, mental
              well-being, and overall quality of life.
            </Typography>
          )}
        </Box>
      </Stack>
    </AdviceCardWrapper>
  );
};

export default AdviceCard;
