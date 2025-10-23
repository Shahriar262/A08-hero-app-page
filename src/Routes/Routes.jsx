import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MyApps from "../Pages/MyApps";
import MyInstallation from "../Pages/MyInstallation";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import AppsNotFoundPage from "../Pages/AppsNotFoundPage";

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
    ],
  },

  {
    path: "/apps",
    errorElement: <ErrorPage />,
    element: <MyApps />,
  },

  {
    path: "/installation",
    errorElement: <ErrorPage />,
    element: <MyInstallation />,
  },

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },


]);

export default router;
