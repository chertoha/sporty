import { Box, Container } from "@mui/material";
import Logo from "components/Logo";
import Socials from "components/Socials";
import { FC } from "react";
import { theme } from "styles/theme";

interface IFooterProps {
  //...
}

const Footer: FC<IFooterProps> = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.bg?.dark,
        paddingTop: {
          xs: "40px",
          md: "64px",
        },
        paddingBottom: {
          xs: "10px",
          md: "16px",
        },
      }}
    >
      <Container
        sx={{
          outline: "1px solid red",
        }}
      >
        <Box>
          <Logo inverse />

          <Box
            sx={{
              mt: {
                xs: "20px",
                md: "32px",
              },
            }}
          >
            <Socials inverse />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
