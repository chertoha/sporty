import QuoteCard from "./QuoteCard";
import ImageCard from "./ImageCard";
import AdviceCard from "./AdviceCard";

import { List, ListItem } from "@mui/material";

const FavoritesQuoteList = () => {
  return (
    <List
      sx={{
        padding: 0,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
          xl: "1fr 1fr",
        },
        columnGap: { md: "16px" },
        rowGap: { xs: "20px", md: "16px" },
      }}
    >
      <ListItem sx={{ padding: 0, gridColumn: { md: "span 2" } }}>
        <QuoteCard isFavorites />
      </ListItem>

      <ListItem sx={{ padding: 0 }}>
        <AdviceCard isFavorites />
      </ListItem>

      <ListItem sx={{ padding: 0 }}>
        <ImageCard isFavorites />
      </ListItem>
    </List>
  );
};

export default FavoritesQuoteList;
