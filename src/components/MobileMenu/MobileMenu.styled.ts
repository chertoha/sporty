import { SxProps, styled } from "@mui/material";
import { flexCenter } from "styles/atomics";

export const Menu = styled("div", {
  shouldForwardProp: prop => prop !== "isopen",
})<{ isopen: boolean }>(({ theme, isopen }) => ({
  position: "fixed",
  zIndex: "999",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",

  backgroundColor: theme.palette.bg?.dark,
  transform: isopen ? "translateX(0)" : "translateX(100%)",
  transition: theme.transitions.create("transform"),
}));

const close: SxProps = {
  ...flexCenter,
  position: "absolute",
  top: "28px",
  right: "28px",
  color: "text.secondary",
};

const wrapper: SxProps = { pt: "60px", pb: "20px" };

const menu: SxProps = { flexGrow: 1, width: "100%", ...flexCenter };

const list: SxProps = {
  width: "100%",
  color: "text.secondary",
  fontSize: "14px",
  lineHeight: 1.28,
  textAlign: "center",
};

const socials: SxProps = { display: "inline-flex" };

const styles = { wrapper, close, menu, list, socials };

export default styles;
