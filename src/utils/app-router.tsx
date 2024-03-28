import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../containers/Main-Layout/MainLayout";
import { Home, Search } from "../pages";
import { LoadingSkeleton } from "../components";
const NowPlaying = lazy(() => import("../pages/Now-Playing/NowPlaying"));
const ComingSoon = lazy(() => import("../pages/Coming-Soon/ComingSoon"));
const TopRated = lazy(() => import("../pages/Top-Rated/TopRated"));
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
        path: "/now_shownig",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <NowPlaying />
          </Suspense>
        ),
      },
      {
        path: "/populare",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <ComingSoon />
          </Suspense>
        ),
      },
      {
        path: "/up_coming",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <ComingSoon />
          </Suspense>
        ),
      },
      {
        path: "top_rated",
        element: (
          <Suspense fallback={<LoadingSkeleton />}>
            <TopRated />
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
