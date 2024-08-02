import Hero from "components/Hero";
import FilterNav from "components/FilterNav";
import styles from "./Home.styled";
import Loader from "components/Loader";
import MainQuoteList from "components/QuoteCards/MainQuoteList";

import { Suspense } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <>
      <Hero />

      <Box
        component="section"
        sx={styles.main}
      >
        <Container>
          <Stack
            justifyContent="space-between"
            sx={styles.exercises}
          >
            <Typography variant="h2">Exercises</Typography>

            <Box sx={styles.nav}>
              <FilterNav />
            </Box>
          </Stack>

          <Stack
            direction={{ xs: "column", xl: "row-reverse" }}
            spacing={{ xs: "80px", md: "64px", xl: 16 }}
            sx={styles.cards}
          >
            <Box sx={styles.filter}>
              <Suspense fallback={<Loader />}>
                <Outlet />
              </Suspense>
            </Box>

            <Box sx={styles.quote}>
              <MainQuoteList />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
