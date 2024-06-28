import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

	const [ user, setUser ] = useState(null);
	const [ isLoggedIn, setIsLoggedIn ] = useState(false);
	const [ loading, setLoading ] = useState(true);

	// create any function that will can be called from any place just using the ' useContext '

	// create user in the firebase database

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = async ()=> {
		try {
			await signOut(auth);			
			setLoading(false);
			localStorage.removeItem('token');
			console.log('on clicked logout');
		} catch (error) {
			console.error(error);
		}
	}

	const signInWithGoogle = ()=>{
		setLoading(true);
		return signInWithPopup( auth , googleProvider )
	}

	const signInWithGitHub = ()=>{
		setLoading(true);
		return signInWithPopup( auth , githubProvider )
	}

	/*Normal Login Action*/

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setLoading(false);
			setIsLoggedIn(true);
		} else {
			setLoading(true);
			setIsLoggedIn(false);
		}
	}, []);
	

	const authInfo = { user , setUser, createUser, signInUser, logOut, loading, signInWithGoogle , signInWithGitHub, isLoggedIn, setIsLoggedIn }

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider


/*

01. create context with 'createContext' and export it
02. give a value to the createContext variable Provider - set provider with value
03. use the Context Provider in the main.jsx
04. access the children( Entire components ) by making all components as a children - write it in the middle of the provider
*/