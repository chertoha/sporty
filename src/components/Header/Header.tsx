import PageSwitcher from "components/PageSwitcher";
import { Container } from "@mui/material";

const Header = () => {
  return (
    <header>
      <Container sx={{ outline: "1px solid tomato" }}>
        <PageSwitcher />
      </Container>
    </header>
  );
};

export default Header;
