import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Title</title>
        <meta name="description" content="description content" />
      </Helmet>
      <div>Home Page</div>
    </>
  );
};

export default HomePage;
