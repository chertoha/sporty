import PageSwitcher from "components/PageSwitcher";
import { Container } from "@mui/material";
import { FC } from "react";

interface IHeaderProps {
  //...
}

const Header: FC<IHeaderProps> = () => {
  return (
    <header>
      <Container sx={{ outline: "1px solid tomato" }}>
        <PageSwitcher />
      </Container>
    </header>
  );
};

export default Header;
