import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {

	const { user, loading } = useContext(AuthContext);
	const loginPageRedirect = useLocation();

	//console.log(loading);
	//console.log(loginPageRedirect);

	if(loading) {
		return <span className="loading loading-spinner loading-lg"></span>
	}

	if(user){
		return children;
	}

	

	return <Navigate state={loginPageRedirect.pathname} to="/login"></Navigate>

}

export default PrivateRoutes