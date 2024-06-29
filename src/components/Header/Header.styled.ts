import { SxProps } from "@mui/material";
import { flexBetween } from "styles/atomics";

const header: SxProps = {
  pt: { xs: "20px", md: "24px", xl: "28px" },
};

const wrapper: SxProps = {
  ...flexBetween,
};

const switcher: SxProps = {
  display: { xs: "none", md: "block" },
};

const socials: SxProps = {
  display: { xs: "none", md: "block" },
};

const menu: SxProps = {
  display: { xs: "flex", md: "none" },
  alignItems: "center",
  justifyContent: "center",
};

const styles = { header, wrapper, switcher, socials, menu };

export default styles;
