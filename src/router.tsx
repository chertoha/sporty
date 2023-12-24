import Layout from "components/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));

export const ROUTES = {
  HOME: "/",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        // path: ROUTES.PAGE,
        // element: <Page />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/sporty",
});

export default router;
