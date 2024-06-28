import Hero from "components/Hero";
import FilterNav from "components/FilterNav";

import { Suspense } from "react";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <Hero />

      <Box
        component="section"
        sx={{ pt: { xs: 20, md: 32 } }}
      >
        <Container>
          <Stack
            justifyContent="space-between"
            sx={{
              flexDirection: { xs: "column", xl: "row" },
              alignItems: { xl: "center" },
            }}
          >
            <Typography variant="h2">Exercises</Typography>

            <Box
              sx={{
                mt: { xs: "20px", md: "32px", xl: 0 },
                display: { md: "flex" },
                alignItems: "center",
                justifyContent: { md: "space-between", xl: "unset" },
                columnGap: { xl: "30px" },
              }}
            >
              {/* <Box sx={{ py: { xs: "20px", md: 0 } }}>Search</Box>

              <Stack
                direction="row"
                spacing={10}
              >
                <StyledNavLink to={ROUTES.MUSCLES}>Muscles</StyledNavLink>
                <StyledNavLink to={ROUTES.BODY_PARTS}>Body parts</StyledNavLink>
                <StyledNavLink to={ROUTES.EQUIPMENT}>Equipment</StyledNavLink>
              </Stack> */}

              <FilterNav />
            </Box>
          </Stack>

          <Stack
            direction={{ xs: "column", xl: "row-reverse" }}
            spacing={{ xl: 16 }}
            sx={{
              mt: {
                xs: "20px",
                md: "32px",
              },
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  xl: 900,
                },
                flexShrink: 0,
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
