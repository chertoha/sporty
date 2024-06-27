import { SxProps } from "@mui/material";

const chip: SxProps = {
  textTransform: "uppercase",

  "& .MuiChip-label": {
    px: [4],
    py: "5px",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 1.33,
  },
};

const star: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pb: "3px",
  color: "#EEA10C",
};

const trash: SxProps = {
  color: "text.primary",
  transitionProperty: "color, background-color",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease-in-out",

  "&.MuiButtonBase-root.MuiIconButton-root:hover": {
    bgcolor: "bg.dark",
    color: "text.secondary",
  },
};

const start: SxProps = { py: 3, fontSize: 16, fontWeight: 400, px: [6] };

const runner: SxProps = {
  width: 24,
  height: 24,
  borderRadius: "50%",
  bgcolor: "bg.dark",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "text.secondary",
};

const name: SxProps = { "&::first-letter": { textTransform: "uppercase" } };

const styles = { chip, star, trash, start, runner, name };

export default styles;
