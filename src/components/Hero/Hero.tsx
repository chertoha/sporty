import Tag from "components/UIKit/Tag";
import heroThumbnailImage from "assets/images/hero/hero-thumbnail.jpg";
import styles from "./Hero.styled";

import { Box, Container, Typography } from "@mui/material";
import { Banner, StyledIcon, TagWrapper, Thumbnail } from "./Hero.styled";

const Hero = () => {
  return (
    <Box component="section">
      <Container>
        <Box sx={styles.wrapper}>
          <Box sx={styles.heading}>
            <Typography
              variant="h1"
              sx={styles.title}
            >
              <StyledIcon />
              Get Body in
              <br /> shape, Stay healthy
            </Typography>
            <Typography sx={styles.text}>
              Transform your physique and embrace a healthier lifestyle with our
              comprehensive fitness and nutrition support.
            </Typography>
          </Box>

          <Box sx={styles.thumbnail}>
            <Thumbnail
              src={heroThumbnailImage}
              alt="young-women-doing-fitness-outdoors-together"
            />
            <TagWrapper>
              <Tag label="#Sport" />
              <Tag label="#Healthy" />
              <Tag label="#Workout" />
              <Tag label="#Diet" />
            </TagWrapper>
          </Box>

          <Banner sx={styles.banner}></Banner>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
