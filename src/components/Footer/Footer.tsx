import Logo from "components/Logo";
import Socials from "components/Socials";
import UnderFooter from "./UnderFooter";
import SubscriptionForm from "components/SubscriptionForm";
import * as styles from "./Footer.styled";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={styles.footer}
    >
      <Container>
        <Box sx={styles.wrapper}>
          <Box>
            <Logo inverse />

            <Box sx={styles.socials}>
              <Socials inverse />
            </Box>
          </Box>

          <Box sx={styles.meta}>
            <Typography sx={styles.text}>
              Transforming your <Box component="span">body</Box> shape with us
            </Typography>

            <Box sx={styles.subscription}>
              <SubscriptionForm />
            </Box>
          </Box>
        </Box>

        <UnderFooter />
      </Container>
    </Box>
  );
};

export default Footer;
