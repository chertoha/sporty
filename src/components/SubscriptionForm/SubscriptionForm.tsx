import { Button, FormControl, TextField, Typography } from "@mui/material";
import * as styles from "./SubscriptionForm.styled";

const SubscriptionForm = () => {
  return (
    <form>
      <Typography sx={styles.text}>
        Subscribe and learn about new exercises!
      </Typography>

      <FormControl sx={styles.control}>
        <TextField
          variant="outlined"
          placeholder="Email"
          type="email"
        />
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
