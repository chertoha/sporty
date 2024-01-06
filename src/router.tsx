import Layout from "components/Layout";
import TestPage from "pages/TestPage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ExercisePage = lazy(() => import("./pages/ExercisePage"));
const MusclesPage = lazy(() => import("./pages/MusclesPage"));
const BodypartsPage = lazy(() => import("./pages/BodypartsPage"));
const EquipmentPage = lazy(() => import("./pages/EquipmentPage"));

export const ROUTES = {
  HOME: "/",
  MUSCLES: "/muscles",
  BODY_PARTS: "/bodyparts",
  EQUIPMENT: "/equipment",

  FAVORITES: "/favorites",
};

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
            element: <ExercisePage />,
          },
          {
            path: ROUTES.MUSCLES,
            element: <MusclesPage />,
          },
          {
            path: ROUTES.BODY_PARTS,
            element: <BodypartsPage />,
          },
          {
            path: ROUTES.EQUIPMENT,
            element: <EquipmentPage />,
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
