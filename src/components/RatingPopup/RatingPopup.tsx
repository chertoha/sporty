import Rating from "./Rating";
import EmailField from "./EmailField";
import CommentField from "./CommentField";
import styles from "./RatingPopup.styled";
import Loader from "components/Loader";

import { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { ratingFormSchema } from "utils/validation/validationSchemas";
import { useRateExerciseMutation } from "../../redux/exercises/exercisesApi";
import { RatingFormValues } from "types/forms";

interface IRatingPopupProps {
  id: number | string;
  closeRatingPopup: () => void;
}

const initialValues: RatingFormValues = {
  rate: 0,
  email: "",
  review: "",
};

// notify 409 -> conflict email
// notify errors -> something went wrong

const RatingPopup: FC<IRatingPopupProps> = ({ id, closeRatingPopup }) => {
  const [rateExercise, { isLoading }] = useRateExerciseMutation();

  const methods = useForm({
    resolver: yupResolver(ratingFormSchema),
    defaultValues: initialValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: RatingFormValues) => {
    console.log("submit", values);

    rateExercise({ id, ...values })
      .unwrap()
      .then(() => {
        closeRatingPopup();
      })
      .catch(err => {
        console.log(err);
      });
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
          disabled={isLoading}
        >
          Send
        </Button>

        {isLoading && <Loader />}
      </Box>
    </FormProvider>
  );
};

export default RatingPopup;
