import Layout from "components/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const ExercisePage = lazy(() => import("./pages/ExercisePage"));

export const ROUTES = {
  HOME: "/",

  EXERCISES: "/exercises",
  MUSCLES: "/exercises/muscles",
  BODY_PARTS: "/exercises/bodyparts",
  EQUIPMENT: "/exercises/equipment",

  FAVORITES: "/favorites",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        // index: true,
        path: ROUTES.HOME,
        element: <HomePage />,
        children: [
          {
            path: ROUTES.EXERCISES,
            element: <ExercisePage />,
            children: [
              {
                path: ROUTES.MUSCLES,
                element: <div>EXERCISES_MUSCLES</div>,
              },
              {
                path: ROUTES.BODY_PARTS,
                element: <div>EXERCISES_BODY_PARTS</div>,
              },
              {
                path: ROUTES.EQUIPMENT,
                element: <div>EXERCISES_EQUIPMENT</div>,
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.FAVORITES,
        element: <FavoritesPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/sporty",
});

export default router;
