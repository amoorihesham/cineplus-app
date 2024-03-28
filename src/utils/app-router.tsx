import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../containers/Main-Layout/MainLayout";
import { ComingSoon, Home, NowPlaying, Search } from "../pages";
import { LoadingSkeleton } from "../components";

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
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <NowPlaying />
          </Suspense>
        ),
      },
      {
        path: "/comingsoon",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            {" "}
            <ComingSoon />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
