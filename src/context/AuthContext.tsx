import React, { useState } from 'react';
import { UserContextType, UserType } from '../types/props-types';

import { toast } from 'react-toastify';
import { headerWithCredienials, loginUrl, logoutUrl, registerUrl } from '../utils/backend/api';
import axios from 'axios';

export const AuthContext = React.createContext<UserContextType | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [errors, setErrors] = useState(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [user, setCurrentUser] = useState<UserType | null>(null);

	const Register = async (firstName: string, lastName: string, email: string, password: string) => {
		setIsLoading(true);
		const userObj = {
			firstName,
			lastName,
			email,
			password,
		};

		try {
			const { data } = await axios.post(registerUrl, userObj, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			toast('Account Registered Successfully.', {
				type: 'success',
			});
			window.location.pathname = '/login';
		} catch (error: any) {
			const {
				data: { message },
			} = error.response;
			setErrors(message);
		} finally {
			setIsLoading(false);
		}
	};
	const Login = async (email: string, password: string) => {
		setIsLoading(true);
		try {
			const { data } = await axios.post(
				loginUrl,
				{
					email,
					password,
				},
				headerWithCredienials
			);

			toast('Logged In', {
				type: 'success',
			});
			setCurrentUser(data?.data);
			localStorage.setItem('user', JSON.stringify(data?.data));
			window.location.pathname = '/';
		} catch (error: any) {
			const {
				data: { message },
			} = error.response;
			setErrors(message);
		} finally {
			setIsLoading(false);
		}
	};
	const Logout = async () => {
		try {
			const { data } = await axios.get(logoutUrl, headerWithCredienials);
			localStorage.removeItem('user');
			setCurrentUser(null);
			window.location.pathname = '/';
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<AuthContext.Provider value={{ user, setCurrentUser, errors, Register, Login, Logout, isLoading }}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
