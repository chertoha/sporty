import bg_mob_1x from "assets/images/hero/hero-mob@1x.jpg";
import bg_mob_2x from "assets/images/hero/hero-mob@2x.jpg";
import bg_tab_1x from "assets/images/hero/hero-tab@1x.jpg";
import bg_tab_2x from "assets/images/hero/hero-tab@2x.jpg";
import bg_desk_1x from "assets/images/hero/hero-desktop@1x.jpg";
import bg_desk_2x from "assets/images/hero/hero-desktop@2x.jpg";

import { Box, Stack, SxProps, styled } from "@mui/material";
import { ReactComponent as SunIcon } from "assets/images/icons/sun.svg";

export const StyledIcon = styled(SunIcon)(({ theme }) => ({
  width: "38px",
  height: "38px",
  marginRight: 19,

  [theme.breakpoints.up("md")]: {
    width: "59px",
    height: "59px",
    marginRight: 16,
  },
}));

export const Banner = styled(Box)(({ theme }) => ({
  height: "460px",
  borderRadius: "30px",

  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: `url(${bg_mob_1x})`,

  "@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
    { backgroundImage: `url(${bg_mob_2x})` },

  [theme.breakpoints.up("md")]: {
    height: "550px",
    borderRadius: "60px",

    backgroundImage: `url(${bg_tab_1x})`,
    "@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
      { backgroundImage: `url(${bg_tab_2x})` },
  },

  [theme.breakpoints.up("xl")]: {
    height: "350px",

    backgroundImage: `url(${bg_desk_1x})`,
    "@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)":
      { backgroundImage: `url(${bg_desk_2x})` },
  },
}));

export const Thumbnail = styled("img")(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("xl")]: {
    display: "block",
    borderRadius: 10,
    marginLeft: "auto",
  },
}));

export const TagWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",

  [theme.breakpoints.up("xs")]: {
    flexWrap: "wrap",
    justifyContent: "unset",
    columnGap: 8,
    rowGap: 8,
  },

  [theme.breakpoints.up("sm")]: {
    justifyContent: "space-between",
    columnGap: 0,
  },

  [theme.breakpoints.up("md")]: {
    justifyContent: "flex-end",
    columnGap: 8,
  },
  [theme.breakpoints.up("xl")]: {
    marginTop: 32,
    justifyContent: "stretch",
    flexWrap: "wrap",
  },
}));

const wrapper: SxProps = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateAreas: {
    xs: `"head" "image" "tags"`,
    xl: `"head tags" "image image"`,
  },
};

const heading: SxProps = { gridArea: "head" };

const title: SxProps = { letterSpacing: "-0.02em", maxWidth: "639px" };

const text: SxProps = {
  mt: 10,
  fontSize: { xs: "14px", md: "18px" },
  lineHeight: 1.3,
  letterSpacing: "-0.02em",
  maxWidth: "528px",
};

const thumbnail: SxProps = {
  gridArea: "tags",
  alignSelf: "flex-end",
  width: { xs: "100%", xl: "200px" },
  mt: {
    xs: 10,
    md: 8,
    xl: 0,
  },
};

const banner: SxProps = { gridArea: "image", mt: { xs: 10, md: 16 } };

const styles = { wrapper, heading, title, text, thumbnail, banner };

export default styles;
