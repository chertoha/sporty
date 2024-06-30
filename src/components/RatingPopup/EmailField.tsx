import styles from "./RatingPopup.styled";

import { useFormContext } from "react-hook-form";
import { Box, FormControl, TextField } from "@mui/material";
import { RatingFormValues } from "./RatingPopup";
import { validationErrorMessage } from "styles/common";

const EmailField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RatingFormValues>();

  return (
    <FormControl sx={styles.email}>
      <TextField
        variant="outlined"
        placeholder="Email"
        type="email"
        {...register("email")}
      />

      {errors.email && (
        <Box
          component="span"
          sx={validationErrorMessage}
        >
          {errors.email.message}
        </Box>
      )}
    </FormControl>
  );
};

export default EmailField;
