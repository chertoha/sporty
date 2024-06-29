import MobileMenu from "components/MobileMenu";
import useBackdrop from "hooks/useBackdrop";

import { Box } from "@mui/material";
import { ReactComponent as MenuIcon } from "assets/images/icons/burger.svg";
import { flexCenter } from "styles/atomics";

const MenuButton = () => {
  const { isOpen, open, close } = useBackdrop();

  return (
    <>
      <Box
        component="button"
        sx={{ ...flexCenter }}
        type="button"
        onClick={open}
      >
        <MenuIcon />
      </Box>

      <MobileMenu
        isOpen={isOpen}
        close={close}
      />
    </>
  );
};

export default MenuButton;
