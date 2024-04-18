import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Login, Register, Search } from '../pages';
import { LoadingSkeleton } from '../components';
import GuardRoutes from '../components/GuardRoutes/guardRoutes';
import MainLayout from '../containers/Main-Layout/MainLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const NowPlaying = lazy(() => import('../pages/Now-Playing/NowPlaying'));
const ComingSoon = lazy(() => import('../pages/Coming-Soon/ComingSoon'));
const TopRated = lazy(() => import('../pages/Top-Rated/TopRated'));
const Watchlist = lazy(() => import('../pages/Watchlist/Watchlist'));
const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/now_shownig',
				element: (
					<Suspense fallback={<LoadingSkeleton />}>
						<NowPlaying />
					</Suspense>
				),
			},
			{
				path: '/populare',
				element: (
					<Suspense fallback={<LoadingSkeleton />}>
						<ComingSoon />
					</Suspense>
				),
			},
			{
				path: '/up_coming',
				element: (
					<Suspense fallback={<LoadingSkeleton />}>
						<ComingSoon />
					</Suspense>
				),
			},
			{
				path: 'top_rated',
				element: (
					<Suspense fallback={<LoadingSkeleton />}>
						<TopRated />
					</Suspense>
				),
			},
			{
				path: 'watch_list',
				element: (
					<GuardRoutes>
						<Suspense fallback={<LoadingSkeleton />}>
							<Watchlist />
						</Suspense>
					</GuardRoutes>
				),
			},
			{
				path: 'movie/:id',
				element: (
					<Suspense fallback={<LoadingSkeleton />}>
						<Movie />
					</Suspense>
				),
			},
			{
				path: '/search',
				element: <Search />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
		],
	},
]);

export default router;
