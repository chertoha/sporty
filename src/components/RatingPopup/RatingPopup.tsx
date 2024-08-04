import Rating from "./Rating";
import EmailField from "./EmailField";
import CommentField from "./CommentField";
import styles from "./RatingPopup.styled";

import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { ratingFormSchema } from "utils/validationSchemas";

interface IRatingPopupProps {
  closeRatingPopup: () => void;
}

export type RatingFormValues = {
  rating: number;
  email: string;
  comment?: string;
};

const initialValues: RatingFormValues = {
  rating: 0,
  email: "",
  comment: "",
};

const RatingPopup: FC<IRatingPopupProps> = ({ closeRatingPopup }) => {
  const methods = useForm({
    resolver: yupResolver(ratingFormSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: RatingFormValues) => {
    console.log("submit", values);

    closeRatingPopup();
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        noValidate
        sx={styles.wrapper}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          variant="body2"
          sx={styles.title}
        >
          Rating
        </Typography>

        <Rating />

        <EmailField />

        <CommentField />

        <Button
          type="submit"
          variant="contained"
          sx={styles.submit}
        >
          Send
        </Button>
      </Box>
    </FormProvider>
  );
};

export default RatingPopup;
