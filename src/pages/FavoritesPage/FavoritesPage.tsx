import Favorites from "components/Favorites";
import { Helmet } from "react-helmet-async";

const FavoritesPage = () => {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="Page to save favorite exersises"
        />
      </Helmet>
      <Favorites />;
    </>
  );
};

export default FavoritesPage;
