import AdviceCard from "./AdviceCard";
import ImageCard from "./ImageCard";
import QuoteCard from "./QuoteCard";
import { List, ListItem } from "@mui/material";

const MainQuoteList = () => {
  return (
    <List
      sx={{
        padding: 0,
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 288px",
          xl: "1fr",
        },
        columnGap: { md: "16px" },
        rowGap: { xs: "20px", md: "32px" },
      }}
    >
      <ListItem sx={{ padding: 0 }}>
        <QuoteCard />
      </ListItem>

      <ListItem sx={{ padding: 0 }}>
        <ImageCard />
      </ListItem>

      <ListItem sx={{ padding: 0 }}>
        <AdviceCard />
      </ListItem>
    </List>
  );
};

export default MainQuoteList;
