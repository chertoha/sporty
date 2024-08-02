import FavoritesQuoteList from "components/QuoteCards/FavoritesQuoteList";
import styles from "./Favorites.styled";

import { Box, Container, Typography } from "@mui/material";
import { useGetExercisesQuery } from "../../redux/exercises/exercisesApi";
import FavoriteCardList from "components/FavoriteCardList";

const Favorites = () => {
  const { data } = useGetExercisesQuery({
    bodypart: "waist",
    equipment: "",
    // keyword: "asdasdasdasdasd",
    keyword: "asdasdasdasdasd",
    limit: 10,
    muscles: "",
    page: 1,
  });

  if (!data) return null;

  return (
    <Box component="section">
      <Container>
        <Box sx={styles.wrapper}>
          <Box sx={styles.quote}>
            <FavoritesQuoteList />
          </Box>

          <Box sx={styles.cards}>
            {data.results.length !== 0 ? (
              <FavoriteCardList list={data.results} />
            ) : (
              <Box sx={styles.notFound}>
                <Typography sx={styles.notFoundText}>
                  It appears that you haven't added any exercises to your
                  favorites yet. To get started, you can add exercises that you
                  like to your favorites for easier access in the future.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Favorites;
