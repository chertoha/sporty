import React, { FC, Suspense } from "react";
import Hero from "components/Hero";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { ROUTES } from "router";

interface IHomeProps {
  //...
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  // ...theme.components?.MuiLink,
  // color: "red",
  "&.active": { color: "red" },
}));

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Hero />

      <Box component="section">
        <Container sx={{ outline: "1px solid grey" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h2">Exercises</Typography>
            </Box>

            <Stack direction="row" spacing={10}>
              <StyledNavLink to={ROUTES.MUSCLES}>Muscles</StyledNavLink>
              <StyledNavLink to={ROUTES.BODY_PARTS}>Body parts</StyledNavLink>
              <StyledNavLink to={ROUTES.EQUIPMENT}>Equipment</StyledNavLink>
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", xl: "row-reverse" }}
            spacing={{ xl: 16 }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  xl: 900,
                },
                flexShrink: 0,
                outline: "1px solid red",
              }}
            >
              <Suspense>
                <Outlet />
              </Suspense>
            </Box>

            <Box sx={{ outline: "1px solid green", width: "100%" }}>Quotes</Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
