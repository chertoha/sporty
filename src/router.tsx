import Layout from "components/Layout";
// import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// const page = lazy(() => import("./page-path"));

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
        element: <Navigate to={ROUTES.HOME} replace={true} />,
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
