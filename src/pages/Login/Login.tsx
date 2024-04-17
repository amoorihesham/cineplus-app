import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContextType } from '../../types/props-types';
import { Link } from 'react-router-dom';

const Login = () => {
	const { Login, errors, isLoading } = useContext(AuthContext) as UserContextType;

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='login-page py-5'>
			<div className='container'>
				{errors && (
					<div className='errors w-50 mx-auto'>
						<div className='alert alert-danger'>{errors}</div>
					</div>
				)}
				<form className='w-50 mx-auto'>
					<div className='form-group mb-3'>
						<label htmlFor='email' className='text-white mb-2 fw-bold'>
							Email:
						</label>
						<input type='email' required className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className='form-group'>
						<label htmlFor='password' className='text-white mb-2 fw-bold'>
							Password:
						</label>
						<input
							type='password'
							required
							className='form-control'
							id='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
				</form>
				<p className='text-white fw-bold text-center my-4'>
					Don't have account yet!{' '}
					<Link className='ms-3 btn main-bg text-white' to={'/register'}>
						Register Now
					</Link>
				</p>
				<button className='btn main-bg text-white w-50 mx-auto d-block mt-4' disabled={isLoading} onClick={() => Login(email, password)}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
