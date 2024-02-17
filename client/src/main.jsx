import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navigation from './components/Navbar/Navbar';
import MainDash from './pages/MainDash/MainDash';
import Analysis from './pages/Analysis/Analysis';
import Review from './pages/Review/Review';
import Speaking from './pages/Speaking/Speaking';
import Settings from './pages/Settings/Settings';
import Word from "./pages/Review/Word/Word"
import CheckList from "./pages/Review/CkeckList/CheckList"
import PenddingCheck from "./pages/Review/PenddingCheck/PenddingCheck"
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/analysis" element={<Analysis />}></Route>
				<Route path="/review" element={<Review />}>
					<Route index element={<Word />}></Route>
					<Route path='review/check' element={<CheckList />}></Route>
					<Route path='review/pendding' element={<PenddingCheck />}></Route>
				</Route>
				<Route path="/speaking" element={<Speaking />}></Route>
				<Route path="/setting" element={<Settings />}></Route>
				<Route index element={<MainDash />}></Route>
			</Route>
		</Routes>
		{/* <App /> */}
	</BrowserRouter>,
	document.getElementById('root')
);
