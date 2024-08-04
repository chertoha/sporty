import styles from "./RatingPopup.styled";

import { useFormContext } from "react-hook-form";
import { Box, FormControl, TextField } from "@mui/material";
import { validationErrorMessage } from "styles/common";
import { RatingFormValues } from "types/forms";

const CommentField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RatingFormValues>();

  return (
    <FormControl sx={styles.comment}>
      <TextField
        variant="outlined"
        placeholder="Your comment"
        multiline
        rows={4}
        {...register("review")}
      />

      {errors.review && (
        <Box
          component="span"
          sx={validationErrorMessage}
        >
          {errors.review.message}
        </Box>
      )}
    </FormControl>
  );
};

export default CommentField;
