import FavoritesQuoteList from "components/QuoteCards/FavoritesQuoteList";
import styles from "./Favorites.styled";

import { Box, Container } from "@mui/material";

const Favorites = () => {
  return (
    <Box component="section">
      <Container>
        <Box sx={styles.wrapper}>
          <Box width="100%">
            <FavoritesQuoteList />
          </Box>

          <Box sx={styles.cards}>Cards</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Favorites;
