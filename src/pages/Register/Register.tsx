import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { UserContextType } from '../../types/props-types';

const Register = () => {
	const { Register, errors } = useContext(AuthContext) as UserContextType;
	const [fName, setFName] = useState('');
	const [lName, setLName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='register-page  py-5'>
			<div className='container'>
				{errors && (
					<div className='errors w-50 mx-auto'>
						<div className='alert alert-danger'>{errors}</div>
					</div>
				)}
				<form className='w-50 mx-auto'>
					<div className='form-group mb-3'>
						<label htmlFor='fName' className='text-white mb-2 fw-bold'>
							First Name:
						</label>
						<input
							type='text'
							required
							className='form-control'
							id='fName'
							value={fName}
							onChange={(e) => setFName(e.target.value)}
						/>
					</div>
					<div className='form-group mb-3'>
						<label htmlFor='lName' className='text-white mb-2 fw-bold'>
							Last Name:
						</label>
						<input
							type='text'
							required
							className='form-control'
							id='lName'
							value={lName}
							onChange={(e) => setLName(e.target.value)}
						/>
					</div>
					<div className='form-group mb-3'>
						<label htmlFor='email' className='text-white mb-2 fw-bold'>
							Email:
						</label>
						<input
							type='email'
							required
							className='form-control'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
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
				<button
					className='btn main-bg text-white w-50 mx-auto d-block mt-4'
					onClick={() => Register(fName, lName, email, password)}
				>
					Register
				</button>
			</div>
		</div>
	);
};

export default Register;
