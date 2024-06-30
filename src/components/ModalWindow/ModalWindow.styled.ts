import { IconButton, styled } from "@mui/material";

export const ModalContainer = styled("div", {
  shouldForwardProp: prop => prop !== "sizes",
})<{ sizes?: number[] }>(({ theme, sizes }) => ({
  width: "90%",
  minHeight: 100,
  position: "absolute",
  top: "15%",
  left: "50%",
  transform: "translateX(-50%)",

  backgroundColor: theme.palette.bg?.dark,
  borderRadius: 20,

  [theme.breakpoints.up("sm")]: { width: sizes ? sizes[0] : "335px" },
  [theme.breakpoints.up("md")]: { width: sizes ? sizes[1] : "704px" },
  [theme.breakpoints.up("xl")]: { width: sizes ? sizes[2] : "708px" },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: 0,
  position: "absolute",
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
