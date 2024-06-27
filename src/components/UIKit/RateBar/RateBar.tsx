import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import { FC } from "react";
import { Box } from "@mui/material";
import { StyledRating } from "./RateBar.styled";

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
        onChange={(_event, newValue) => {
          setValue && setValue(newValue);
        }}
      />
    </Box>
  );
};

export default RateBar;
