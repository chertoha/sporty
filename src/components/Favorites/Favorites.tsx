import FavoritesQuoteList from "components/QuoteCards/FavoritesQuoteList";
import styles from "./Favorites.styled";
import FavoriteCardList from "components/FavoriteCardList";

import { useSelector } from "react-redux";
import { Box, Container, Typography } from "@mui/material";
import { selectFavorites } from "../../redux/favorites/selectors";

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Box component="section">
      <Container>
        <Box sx={styles.wrapper}>
          <Box sx={styles.quote}>
            <FavoritesQuoteList />
          </Box>

          <Box sx={styles.cards}>
            {favorites.length !== 0 ? (
              <FavoriteCardList list={favorites} />
            ) : (
              <Box sx={styles.notFound}>
                <Typography sx={styles.notFoundText}>
                  It appears that you haven't added any exercises to your favorites yet. To get
                  started, you can add exercises that you like to your favorites for easier access
                  in the future.
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
