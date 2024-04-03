import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './utils/app-router';
import './App.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import { UserContextType } from './types/props-types';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10 * 60 * 1000,
		},
	},
});
function App() {
	const { setCurrentUser } = useContext(AuthContext) as UserContextType;
	useEffect(() => {
		if (localStorage.getItem('user') !== null) {
			const savedUser: any = localStorage.getItem('user');
			setCurrentUser(JSON.parse(savedUser));
		}
	}, []);
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
