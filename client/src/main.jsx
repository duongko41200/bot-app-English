import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,RouterProvider } from 'react-router-dom';

import './index.css';
import Router from './router/router';

ReactDOM.render(
	

	<RouterProvider router={Router} />
	
	,
	document.getElementById('root')
);
