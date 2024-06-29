import Socials from "components/Socials";
import styles, { Menu } from "./MobileMenu.styled";

import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Box, ListItemText, MenuItem, MenuList, Stack } from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/images/icons/close.svg";
import { ROUTES } from "router";

interface IMobileMenuProps {
  isOpen: boolean;
  close: () => void;
}

const MobileMenu: FC<IMobileMenuProps> = ({ isOpen, close }) => {
  return (
    <Menu
      isopen={isOpen}
      sx={styles.wrapper}
    >
      <Box
        component="button"
        sx={styles.close}
        type="button"
        onClick={close}
      >
        <CloseIcon
          width={40}
          height={40}
        />
      </Box>

      <Stack
        height="100%"
        direction="column"
        alignItems="center"
      >
        <Box sx={styles.menu}>
          <MenuList sx={styles.list}>
            <MenuItem
              component={NavLink}
              onClick={close}
              to={ROUTES.HOME}
            >
              <ListItemText>Home</ListItemText>
            </MenuItem>

            <MenuItem
              component={NavLink}
              onClick={close}
              to={ROUTES.FAVORITES}
            >
              <ListItemText>Favorites</ListItemText>
            </MenuItem>
          </MenuList>
        </Box>

        <Box sx={styles.socials}>
          <Socials
            inverse
            size={44}
          />
        </Box>
      </Stack>
    </Menu>
  );
};

export default MobileMenu;
