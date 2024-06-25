import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import axios from 'axios';

const Login = () => {

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	  });


	  const [errors, setErrors] = useState({});
	  const [message, setMessage] = useState('');
	
	  const handleChange = (e) => {
		setFormData({
		  ...formData,
		  [e.target.name]: e.target.value
		});
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  const response = await axios.post('https://businessautomata.com/us-aid-api/api/auth/login', formData);
		  console.log(response);
		  console.log(response.data.payload.token);
		  localStorage.setItem('token', response.data.payload.token);
		  setMessage('Login successful!');
		  // toast here
		  
		  setErrors({});
		} catch (error) {
		  if (error.response) {
			setErrors(error.response.data.errors || { message: error.response.data.message });
		  }
		}
	  };	  

	  //console.log(message);

	/* Show Hide Password funcion*/
	const [showPassword, setShowPassword] = useState(false);

	const showHidePasswordVisibilityHandler = () => {
		setShowPassword(!showPassword);
	  };

	return (
		<div className='flex justify-center items-center bg-common-bg bg-no-repeat bg-cover pt-[150px] md:pt-[5%] pb-[100px] md:pb-[5%] px-4 mt-[-75px] md:mt-0'>
			<div className='login-box max-w-md min-w-80 '>
				<div className='font-Kalpurush-bold text-white text-3xl text-center mb-8'>পোস্টার বানাতে, ভিডিও বানাতে বা আপনার দাবি জানাতে লগইন করুন</div>

				<form onSubmit={handleSubmit} className="max-w-md min-w-80">
					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">ইমেইল</span></label>
						<input name='email' type="email" placeholder="আপনার ইমেইল" className="input input-bordered" required value={formData.email} onChange={handleChange} />
						{errors.email && <div>{errors.email[0]}</div>}
					</div>
					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পাসওয়ার্ড</span></label>
						<input name='password' type={showPassword ? 'text' : 'password'} placeholder="পাসওয়ার্ড" value={formData.password} onChange={handleChange} className="input input-bordered" required />
						{errors.password && <div>{errors.password[0]}</div>}
						<span className="badge badge-info mt-2 font-Kalpurush-bold" onClick={showHidePasswordVisibilityHandler}>
							পাসওয়ার্ড {showPassword ? 'লুকান' : 'দেখুন'}
						</span>
						{errors.message && <div>{errors.message}</div>}
						{message && <div>{message}</div>}
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary font-Kalpurush-bold text-xl">লগইন</button>
					</div>
					<div className="mt-4 text-center">
						<p>এখানে নতুন? তবে সাইনআপ করুন <Link className='text-white' to="/register">সাইনআপ</Link></p>
					</div>
				</form>

				{/* <div className='text-white text-center font-Kalpurush-bold text-2xl my-4'>অথবা</div>
				<div className="flex items-center justify-center gap-4 flex-col">
					<button className="gmail-login-button flex items-center gap-4">
						<FcGoogle /> গুগল দিয়ে লগইন করুন
					</button>
					<button className="gmail-login-button flex items-center gap-4">
						<RiFacebookBoxFill fill="#0866FF" /> ফেসবুক দিয়ে লগইন করুন
					</button>
				</div> */}

			</div>
		</div>
	)
}

export default Login