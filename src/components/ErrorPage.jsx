import React from 'react'

import { NavLink } from 'react-router-dom'
import Lottie from "lottie-react";
import Lottie404 from "../assets/404-lottie.json";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

const ErrorPage = () => {
  return (
    <>
        <Header></Header>
        <div className="hero min-h-screen bg-base-200 my-4">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">404 Page</h1>
                <p className="py-6">Please find the desire page or Go Back to Home</p>
                <Lottie animationData={Lottie404} loop={true} />
                <NavLink to='/' className="btn btn-primary">Go to Home</NavLink>
                </div>
            </div>
        </div>
		  <Footer></Footer>
    </>
  )
}

export default ErrorPage