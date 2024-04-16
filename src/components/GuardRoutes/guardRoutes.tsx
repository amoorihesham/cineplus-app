import { Navigate } from 'react-router-dom';

const GuardRoutes = ({ children }: { children: JSX.Element }) => {
	if (localStorage.getItem('user') !== null) return <>{children}</>;
	else return <Navigate to='/login' />;
};

export default GuardRoutes;
