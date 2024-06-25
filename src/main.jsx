import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import './stylesheet.css'
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Home from './pages/general/Home';
import Login from './pages/general/Login';
import Register from './pages/general/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './components/PrivateRoutes';
import MyProfile from './pages/MyProfile';
import AboutUs from './pages/AboutUs';
import SinglePost from './pages/SinglePost';

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
			{
				path: "/about-us",
				element: <AboutUs></AboutUs>,
			},
			{
				path: "/post-detail/:deterrent",
				element: <SinglePost></SinglePost>,
				loader: ({params}) => fetch(`https://businessautomata.com/us-aid-api/api/get/post?deterrent=${params.deterrent}`)
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>
			},
			{
				path: "/my-profile",
				element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
			},
		]
	},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router}></RouterProvider>
		</AuthProvider>		
	</React.StrictMode>,
)
