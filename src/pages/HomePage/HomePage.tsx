import Home from "components/Home";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Title</title>
        <meta name="description" content="description content" />
      </Helmet>
      <Home />
    </>
  );
};

export default HomePage;
