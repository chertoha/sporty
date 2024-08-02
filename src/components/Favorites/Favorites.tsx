import { Box, Container, Stack } from "@mui/material";
import FavoritesQuoteList from "components/QuoteCards/FavoritesQuoteList";
import styles from "./Favorites.styled";

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
