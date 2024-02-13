import React from 'react';
import Navigation from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
const App = () => {
	return (
		<div className="App">
			<div className="AppGlass">
				{/* <Sidebar/> */}

				<Outlet />
				{/* <RightSide /> */}
				<Navigation />
			</div>
		</div>
	);
};

export default App;
