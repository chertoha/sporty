import RateBar from "components/UIKit/RateBar";
import styles from "./RatingPopup.styled";

import { Box, Typography } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { validationErrorMessage } from "styles/common";
import { RatingFormValues } from "types/forms";

const Rating = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RatingFormValues>();

  return (
    <Controller
      name="rate"
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

          {errors.rate && (
            <Box
              component="span"
              sx={validationErrorMessage}
            >
              {errors.rate.message}
            </Box>
          )}
        </Box>
      )}
    />
  );
};

export default Rating;
