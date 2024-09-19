import Home from "components/Home/Home";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sporty</title>
        <meta
          name="description"
          content="sport exercises webb app"
        />
      </Helmet>

      <Home />
    </>
  );
};

export default HomePage;
