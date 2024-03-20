import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../containers/Main-Layout/MainLayout";
import { ComingSoon, Home, NowPlaying } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/nowplaying",
        element: <NowPlaying />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
      },
    ],
  },
]);

export default router;
