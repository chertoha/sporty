import { Rating, alpha, styled } from "@mui/material";

export const StyledRating = styled(Rating)<{ iconsize: number }>(
  ({ theme, iconsize }) => ({
    columnGap: 2,
    fontSize: `${iconsize}px`,
    lineHeight: 1,

    "& .MuiRating-iconEmpty": {
      color: alpha(theme.palette.text.secondary, 0.2),
    },

    "& .MuiRating-iconFilled": {
      color: "#EEA10C",
    },
    "& .MuiRating-iconHover": {
      color: "#EEA10C",
    },
  })
);
