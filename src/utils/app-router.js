import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../containers/Main-Layout/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
