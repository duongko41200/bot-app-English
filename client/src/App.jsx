import React, { useEffect, useLayoutEffect, useState } from 'react';
import Navigation from './components/Navbar/Navbar';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from './store/feature/auth';
import SignIn from './pages/Login/SignIn';
const App = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch();
	const auths = useSelector((state) => state.authStore.user);
	const [isAuth, setIsAuth] = useState(false);

	useLayoutEffect(() => {
		const userId = localStorage.getItem('userId');
		const accessToken = localStorage.getItem('accessToken');
		const user = localStorage.getItem('user');
		if (!user) {
			navigation('/login');
		} else {
			dispatch(SET_USER(user));
			// setIsAuth(true)
		}

		console.log({ userId, accessToken });
	}, []);
	return (
		<>
			{auths != '' ? (
				<div className="App">
					<div className="AppGlass">
						<Outlet />
						<Navigation />
					</div>
					<Toaster />
				</div>
			) : (
				<SignIn />
			)}
		</>
	);
};

export default App;
