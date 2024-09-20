import * as styles from "./SubscriptionForm.styled";

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscriptionFormSchema } from "utils/validation/validationSchemas";
import { validationErrorMessage } from "styles/common";
import { useSubscribeMutation } from "../../redux/subscription/subscriptionApi";
import Loader from "components/Loader";

export type SubscriptionFormValues = {
  email: string;
};

const initialValues: SubscriptionFormValues = { email: "" };

const SubscriptionForm = () => {
  const [subscribe, { isLoading }] = useSubscribeMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(subscriptionFormSchema),
    defaultValues: initialValues,
  });

  const onSubmit = (values: SubscriptionFormValues) => {
    console.log(values);

    subscribe({ ...values })
      .unwrap()
      .then(() => {
        reset(initialValues);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Typography sx={styles.text}>Subscribe and learn about new exercises!</Typography>

      <FormControl sx={styles.control}>
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

      <Button
        type="submit"
        variant="contained"
        sx={styles.button}
        disabled={isLoading}
      >
        Send
      </Button>

      {isLoading && <Loader />}
    </form>
  );
};

export default SubscriptionForm;
