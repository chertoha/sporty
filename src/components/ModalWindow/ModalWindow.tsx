import Modal from "@mui/material/Modal";

import { FC, ReactElement } from "react";
import { ReactComponent as CloseIcon } from "assets/images/icons/close.svg";
import { CloseButton, ModalContainer } from "./ModalWindow.styled";

interface IModalWindowProps {
  children: ReactElement;
  isOpen: boolean;
  close: () => void;
  sizes?: number[];
}

const ModalWindow: FC<IModalWindowProps> = ({
  children,
  isOpen,
  close,
  sizes,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={close}
      sx={{
        overflow: "auto",
      }}
    >
      <ModalContainer sizes={sizes}>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
        {children}
      </ModalContainer>
    </Modal>
  );
};

export default ModalWindow;
