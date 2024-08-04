import Search from "components/Search";
import styles, { StyledNavLink } from "./FilterNav.styled";

import { Box, Stack } from "@mui/material";
import { ROUTES } from "router";
import { FC } from "react";

interface IFilterNavProps {
  isSearchVisible: boolean;
}

const FilterNav: FC<IFilterNavProps> = ({ isSearchVisible }) => {
  return (
    <>
      {isSearchVisible && (
        <Box sx={styles.search}>
          <Search />
        </Box>
      )}

      <Stack
        direction="row"
        spacing={10}
      >
        <StyledNavLink to={ROUTES.MUSCLES}>Muscles</StyledNavLink>
        <StyledNavLink to={ROUTES.BODY_PARTS}>Body parts</StyledNavLink>
        <StyledNavLink to={ROUTES.EQUIPMENT}>Equipment</StyledNavLink>
      </Stack>
    </>
  );
};

export default FilterNav;
