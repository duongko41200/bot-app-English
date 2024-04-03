import React, { useEffect } from 'react';
import Navigation from './components/Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { SET_USER } from './store/feature/auth';
const App = () => {
	const navigation = useNavigate();
	const dispatch = useDispatch()

	useEffect(() => {

		const userId = localStorage.getItem('userId');
		const accessToken = localStorage.getItem('accessToken');
		const user = localStorage.getItem('user');
		if (!user) {
			navigation('/login');
		} else {

			dispatch(SET_USER(user))
		}

		console.log({ userId, accessToken });
	}, []);
	return (
		<div className="App">
			<div className="AppGlass">
				{/* <Sidebar/> */}

				<Outlet />
				{/* <RightSide /> */}
				<Navigation />
			</div>
			<Toaster />
		</div>
	);
};

export default App;
