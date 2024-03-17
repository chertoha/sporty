import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { FC } from "react";
import { ReactComponent as SunIcon } from "assets/images/icons/sun.svg";
import bg_mob_1x from "assets/images/hero/hero-mob@1x.jpg";
import bg_mob_2x from "assets/images/hero/hero-mob@2x.jpg";
import bg_tab_1x from "assets/images/hero/hero-tab@1x.jpg";
import bg_tab_2x from "assets/images/hero/hero-tab@2x.jpg";
import bg_desk_1x from "assets/images/hero/hero-desktop@1x.jpg";
import bg_desk_2x from "assets/images/hero/hero-desktop@2x.jpg";
import Tag from "components/UIKit/Tag";

interface IHeroProps {
  //...
}

const StyledIcon = styled(SunIcon)(({ theme }) => ({
  width: "38px",
  height: "38px",
  marginRight: 19,

  [theme.breakpoints.up("md")]: {
    width: "59px",
    height: "59px",
    marginRight: 16,
  },
}));

const Banner = styled(Box)(({ theme }) => ({
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

const TagWrapper = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  // justifyContent: "space-between",
  // columnGap: 8,

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
  [theme.breakpoints.up("xl")]: {},
}));

const Hero: FC<IHeroProps> = () => {
  return (
    <Box
      component="section"
      // sx={{ pt: { xs: 40, md: 50 } }}
    >
      <Container sx={{ outline: "1px solid blue" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gridTemplateAreas: {
              xs: `"head" "image" "tags"`,
              xl: `"head tags" "image image"`,
            },
          }}
        >
          <Box sx={{ gridArea: "head", outline: "1px solid gray" }}>
            <Typography
              variant="h1"
              sx={{ letterSpacing: "-0.02em", maxWidth: "639px" }}
            >
              <StyledIcon />
              Get Body in
              <br /> shape, Stay healthy
            </Typography>
            <Typography
              sx={{
                mt: 10,
                fontSize: { xs: "14px", md: "18px" },
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                maxWidth: "528px",
              }}
            >
              Transform your physique and embrace a healthier lifestyle with our
              comprehensive fitness and nutrition support.
            </Typography>
          </Box>

          <Box
            sx={{
              gridArea: "tags",
              // outline: "1px solid red",
              width: "100%",
              justifySelf: {
                // xs: "center",
                // md: "flex-end",
                // xl: "inherit",
              },
              mt: {
                xs: 10,
                md: 8,
                xl: 0,
              },
            }}
          >
            <TagWrapper>
              <Tag label="#Sport" />
              <Tag label="#Healthy" />
              <Tag label="#Workout" />
              <Tag label="#Diet" />
            </TagWrapper>
          </Box>

          <Banner
            sx={{
              gridArea: "image",
              // outline: "1px solid green",
              mt: { xs: 10, md: 16 },
            }}
          ></Banner>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
