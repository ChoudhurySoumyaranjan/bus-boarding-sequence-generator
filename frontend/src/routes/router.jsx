import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import BoardingPage from "../pages/BoardingPage";
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  // Public Routes
  {
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"boarding",
        element:<BoardingPage/>
      },
      {
        path:"about",
        element:<AboutPage/>
      }

    ]
  },

  // 404
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
