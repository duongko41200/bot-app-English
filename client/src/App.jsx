import React, { useEffect } from 'react';
import Navigation from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
const App = () => {
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
