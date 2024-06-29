import Logo from "components/Logo";
import PageSwitcher from "components/PageSwitcher";
import Socials from "components/Socials";
import MenuButton from "components/MenuButton";
import styles from "./Header.styled";

import { Box, Container } from "@mui/material";

const Header = () => {
  return (
    <Box
      component="header"
      sx={styles.header}
    >
      <Container>
        <Box sx={styles.wrapper}>
          <Logo />

          <Box sx={styles.switcher}>
            <PageSwitcher />
          </Box>

          <Box sx={styles.socials}>
            <Socials />
          </Box>

          <Box sx={styles.menu}>
            <MenuButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
