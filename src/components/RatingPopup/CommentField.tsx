import styles from "./RatingPopup.styled";

import { useFormContext } from "react-hook-form";
import { Box, FormControl, TextField } from "@mui/material";
import { RatingFormValues } from "./RatingPopup";
import { validationErrorMessage } from "styles/common";

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
        {...register("comment")}
      />

      {errors.comment && (
        <Box
          component="span"
          sx={validationErrorMessage}
        >
          {errors.comment.message}
        </Box>
      )}
    </FormControl>
  );
};

export default CommentField;
