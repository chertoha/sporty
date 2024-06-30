import { Box, Stack, Typography, alpha } from "@mui/material";
import { ReactComponent as DumbbellIcon } from "assets/images/icons/dumbbell.svg";
import styles from "./QuoteCards.styled";

const AdviceCard = () => {
  return (
    <Box
      sx={{
        ...styles.quoteWrapper,
        backgroundColor: "bg.light",
        borderRadius: "20px",
        height: { xl: "315px" },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: "20px", md: "16px" }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "bg.dark",
          }}
        >
          <DumbbellIcon />
        </Box>

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

          <Typography
            className="trim-text-five-row"
            variant="body1"
            sx={{
              color: "text.primary",
              mt: { xs: "16px", md: "20px" },
              textOverflow: {
                xl: "unset",
              },

              overflow: { xl: "unset" },
            }}
          >
            The World Health Organization recommends at least 150 minutes of
            moderate-intensity aerobic physical activity throughout the week for
            adults aged 18-64. However, what happens if we adjust that number to
            110 minutes every day? While it might seem like a high number to
            hit, dedicating 110 minutes daily to sporting activities may offer
            unparalleled benefits to physical health, mental well-being, and
            overall quality of life.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default AdviceCard;

// .trim-text-five-row {
//   text-overflow: ellipsis;
//   overflow: hidden;

//   display: -webkit-box;
//   -webkit-line-clamp: 5;
//   -webkit-box-orient: vertical;
// }
