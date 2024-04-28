import { Box, Container } from "@mui/material";
import Logo from "components/Logo";
import { FC } from "react";

interface IFooterProps {
  //...
}

const Footer: FC<IFooterProps> = () => {
  return (
    <footer>
      <Container sx={{ outline: "1px solid red" }}>
        <Box sx={{ color: "red" }}>
          <Logo />
        </Box>
        Footer
      </Container>
    </footer>
  );
};

export default Footer;
