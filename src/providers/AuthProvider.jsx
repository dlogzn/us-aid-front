import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

	const [ user, setUser ] = useState(null);
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

	// checking the user already logged in or not - set an observer
	useEffect( ()=>{
		const unSubscribe =  onAuthStateChanged( auth, currentUser=>{
			console.log('current user find ' , currentUser );
			const useEmail = currentUser?.email || user?.email;			
			const loggedUser = { email: useEmail };
			setUser(currentUser);
			setLoading(false); // hiding the loading after getting the user infomaration
			// for - if user exists then issue a token
			if (currentUser){
				axios.post('https://b9-a11-server.vercel.app/jwt', loggedUser , {withCredentials: true})
				.then( res => {
					console.log('token resp' , res.data);
				})
			} else {
				axios.post('https://b9-a11-server.vercel.app/logout', loggedUser , {withCredentials: true})
				.then( res => {
					console.log('token logout resp' , res.data);
				})
			}
		});
		return () =>{ unSubscribe(); }
	} , []);

	const logOut = async ()=> {
		try {
			await signOut(auth);			
			setLoading(false);
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



	const authInfo = { user , createUser, signInUser, logOut, loading, signInWithGoogle , signInWithGitHub }

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