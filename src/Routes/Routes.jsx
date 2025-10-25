import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MyApps from "../Pages/MyApps";
import MyInstallation from "../Pages/MyInstallation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/apps",
        element: <MyApps />,
      },

      {
        path: "/installation",
        element: <MyInstallation />,
      },
    ],
  },

  {
    path: "/apps/:id",
    element: <AppDetails />,
  },
]);

export default router;
