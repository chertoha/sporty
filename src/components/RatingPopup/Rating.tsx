import RateBar from "components/UIKit/RateBar";
import styles from "./RatingPopup.styled";

import { Box, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { RatingFormValues } from "./RatingPopup";
import { validationErrorMessage } from "styles/common";

const Rating = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RatingFormValues>();

  return (
    <Controller
      name="rating"
      control={control}
      render={({ field: { value, onChange } }) => (
        <Box sx={styles.rate}>
          <Typography
            variant="body2"
            mr={1}
            color="text.secondary"
          >
            {value?.toFixed(1)}
          </Typography>
          <RateBar
            value={value}
            setValue={onChange}
            readOnly={false}
            size={24}
          />

          {errors.rating && (
            <Box
              component="span"
              sx={validationErrorMessage}
            >
              {errors.rating.message}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default Rating;
