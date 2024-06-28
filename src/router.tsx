import CardSection from "components/CardSection";
import Layout from "components/Layout";
import TestPage from "pages/TestPage";

import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export const ROUTES = {
  HOME: "/",
  MUSCLES: "/muscles",
  BODY_PARTS: "/bodyparts",
  EQUIPMENT: "/equipment",

  FAVORITES: "/favorites",
} as const;

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTES.MUSCLES} />,
          },
          {
            path: ROUTES.MUSCLES,
            element: <CardSection filterKey="Muscles" />,
          },
          {
            path: ROUTES.BODY_PARTS,
            element: <CardSection filterKey="Body parts" />,
          },
          {
            path: ROUTES.EQUIPMENT,
            element: <CardSection filterKey="Equipment" />,
          },
        ],
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
      {
        //TEMP TEST ROUTE
        path: "/test",
        element: <TestPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/sporty",
});

export default router;
