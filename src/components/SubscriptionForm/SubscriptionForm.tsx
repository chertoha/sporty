import * as styles from "./SubscriptionForm.styled";

import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { subscriptionFormSchema } from "utils/validation/validationSchemas";
import { validationErrorMessage } from "styles/common";

export type SubscriptionFormValues = {
  email: string;
};

const initialValues: SubscriptionFormValues = { email: "" };

const SubscriptionForm = () => {
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

    reset(initialValues);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Typography sx={styles.text}>
        Subscribe and learn about new exercises!
      </Typography>

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
      >
        Send
      </Button>
    </form>
  );
};

export default SubscriptionForm;
