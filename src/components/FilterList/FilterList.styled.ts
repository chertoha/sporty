import { SxProps, styled } from "@mui/material";

export const Image = styled("img")(({ theme }) => ({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",

  [theme.breakpoints.up("md")]: {},

  [theme.breakpoints.up("xl")]: {},
}));

const button: SxProps = {
  position: "relative",
  borderRadius: 6,
  overflow: "hidden",
  width: "100%",
  height: {
    xs: 225,
    xl: 242,
  },

  "&::after": {
    position: "absolute",
    content: `''`,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgcolor: "rgba(17,17,17,0.5)",
  },
};

const meta: SxProps = {
  color: "text.secondary",
  position: "absolute",
  zIndex: "2",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

const name: SxProps = {
  ":first-letter": {
    textTransform: "uppercase",
  },
};

const styles = { button, meta, name };

export default styles;
