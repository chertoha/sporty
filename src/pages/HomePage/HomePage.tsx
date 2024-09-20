import Home from "components/Home/Home";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Sporty</title>
        <meta
          name="description"
          content="Sporty is a web service for those who are looking for exersises"
        />
      </Helmet>

      <Home />
    </>
  );
};

export default HomePage;
