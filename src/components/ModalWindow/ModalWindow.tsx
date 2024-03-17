import { IconButton, styled } from "@mui/material";
import Modal from "@mui/material/Modal";
import { FC, ReactElement } from "react";
import { ReactComponent as CloseIcon } from "assets/images/icons/close.svg";

interface IModalWindowProps {
  children: ReactElement;
  isOpen: boolean;
  close: () => void;
}

const ModalContainer = styled("div")(({ theme }) => ({
  width: "90%",
  minHeight: 100,
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",

  backgroundColor: theme.palette.bg?.dark,
  borderRadius: 20,

  [theme.breakpoints.up("sm")]: { width: "335px" },
  [theme.breakpoints.up("md")]: { width: "704px", padding: "40px 40px" },
  [theme.breakpoints.up("xl")]: { width: "708px" },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  position: "absolute" as "absolute",
  top: 14,
  right: 14,
  width: 24,
  height: 24,
  color: theme.palette.text.secondary,

  [theme.breakpoints.up("md")]: {
    top: 16,
    right: 16,
    width: 28,
    height: 28,
  },

  "&>svg": {
    width: "100%",
    height: "100%",
  },

  transition: theme.transitions.create(["transform"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),

  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const ModalWindow: FC<IModalWindowProps> = ({ children, isOpen, close }) => {
  return (
    <Modal
      open={isOpen}
      onClose={close}
    >
      <ModalContainer>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContainer>
    </Modal>
  );
};

export default ModalWindow;
