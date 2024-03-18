import Rating from "@mui/material/Rating";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { FC } from "react";
import { Box, alpha, styled } from "@mui/material";

const StyledRating = styled(Rating)<{ iconsize: number }>(
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

interface IRateBarProps {
  size?: number;
  readOnly?: boolean;
  setValue?: (value: number | null) => void;
  value: number | null;
}

const RateBar: FC<IRateBarProps> = ({
  size = 18,
  readOnly = true,
  setValue,
  value,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <StyledRating
        readOnly={readOnly}
        iconsize={size}
        color="white"
        precision={0.1}
        icon={<StarRateRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarRateRoundedIcon fontSize="inherit" />}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue && setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RateBar;
