import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './stylesheet.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './pages/general/Home';


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root></Root>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
		]
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
