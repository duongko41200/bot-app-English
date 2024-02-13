import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navigation from './components/Navbar/Navbar';
import MainDash from './pages/MainDash/MainDash';
import Analysis from "./pages/Analysis/Analysis"
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<Routes>
      <Route path='/' element={<App />}>
      <Route path='/analysis' element={<Analysis/>}></Route>
        <Route index element={<MainDash/>}></Route>
      </Route>
		</Routes>
		{/* <App /> */}
	</BrowserRouter>,
	document.getElementById('root')
);
