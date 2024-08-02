import styles, { QuoteWrapper } from "./QuoteCards.styled";

import { FC } from "react";
import { Box, Stack, Typography, alpha } from "@mui/material";
import { ReactComponent as RunnerIcon } from "assets/images/icons/runner.svg";
import { ReactComponent as QuoteIcon } from "assets/images/icons/quotes.svg";

interface IQuoteCardProps {
  isFavorites?: boolean;
}

const QuoteCard: FC<IQuoteCardProps> = ({ isFavorites = false }) => {
  return (
    <QuoteWrapper isFavorites={isFavorites}>
      <Box sx={styles.quote}>
        <QuoteIcon
          width="100%"
          height="100%"
        />
      </Box>

      <Stack
        direction="row"
        spacing={{ xs: "20px", md: "16px" }}
      >
        <Box sx={styles.icon}>
          <RunnerIcon />
        </Box>

        <Box>
          <Typography sx={styles.title}>Quote of the day</Typography>

          <Typography
            variant="body1"
            sx={styles.text}
          >
            A lot of times I find that people who are blessed with the most
            talent don't ever develop that attitude, and the ones who aren't
            blessed in that way are the most competitive and have the biggest
            heart.
          </Typography>

          <Typography
            variant="body1"
            sx={styles.author}
          >
            Tom Brady
          </Typography>
        </Box>
      </Stack>
    </QuoteWrapper>
  );
};

export default QuoteCard;
