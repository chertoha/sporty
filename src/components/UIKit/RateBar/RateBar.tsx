import Rating from "@mui/material/Rating";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { FC, useState } from "react";
import { Box, alpha, styled } from "@mui/material";

const StyledRating = styled(Rating)<{ iconSize: number }>(
  ({ theme, iconSize }) => ({
    columnGap: 2,
    fontSize: `${iconSize}px`,
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
  initialValue?: number;
}

const RateBar: FC<IRateBarProps> = ({
  size = 18,
  readOnly = true,
  initialValue = 0,
}) => {
  const [value, setValue] = useState<number | null>(() =>
    initialValue < 0 || initialValue > 5 ? 0 : initialValue
  );

  return (
    <Box sx={{ display: "flex" }}>
      <StyledRating
        readOnly={readOnly}
        iconSize={size}
        color="white"
        precision={0.1}
        icon={<StarRateRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarRateRoundedIcon fontSize="inherit" />}
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RateBar;
