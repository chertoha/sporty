import Favorites from "components/Favorites";
import { Helmet } from "react-helmet-async";

const FavoritesPage = () => {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="sport exercises webb app favorites page"
        />
      </Helmet>
      <Favorites />;
    </>
  );
};

export default FavoritesPage;
