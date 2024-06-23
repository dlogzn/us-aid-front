import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";

const Login = () => {

	/* Show Hide Password funcion*/
	const [showPassword, setShowPassword] = useState(false);

	const showHidePasswordVisibilityHandler = () => {
		setShowPassword(!showPassword);
	  };

	/*checking conditions*/
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState(true);
  
	const handleChange = (event) => {
	  const newPassword = event.target.value; 
	  setPassword(newPassword);

	  const hasUppercase = /[A-Z]/.test(newPassword);
	  const hasLowercase = /[a-z]/.test(newPassword);
	  const hasMinLength = newPassword.length >= 6;
  
	  // Update isValid state based on criteria
	  setIsValid(hasUppercase && hasLowercase && hasMinLength);
	}

	return (
		<div className='flex justify-center items-center bg-common-bg bg-no-repeat bg-cover py-[5%]'>
			<div className='login-box max-w-md min-w-80 '>
				<div className='font-Kalpurush-bold text-white text-3xl text-center mb-8'>পোস্টার বানাতে, ভিডিও বানাতে বা আপনার দাবি জানাতে লগইন করুন</div>

				<form className="max-w-md min-w-80">
					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">ইমেইল</span></label>
						<input name='email' type="email" placeholder="আপনার ইমেইল" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পাসওয়ার্ড</span></label>
						<input name='password' type={showPassword ? 'text' : 'password'} placeholder="পাসওয়ার্ড" value={password} onChange={handleChange} className="input input-bordered" required />
						{!isValid && (
							<p className="text-sm mt-2" style={{ color: 'red' }}>
								Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.
							</p>
						)}
						
						<span className="badge badge-info mt-2 font-Kalpurush-bold" onClick={showHidePasswordVisibilityHandler}>
							পাসওয়ার্ড {showPassword ? 'লুকান' : 'দেখুন'}
						</span>

					</div>
					<div className="form-control mt-6">
						{isValid && (
							<button className="btn btn-primary font-Kalpurush-bold text-xl">লগইন</button>	
						)}
						{!isValid && (
							<button disabled="disabled" className="btn font-Kalpurush-bold text-xl">লগইন</button>	
						)}						
					</div>
					<div className="mt-4 text-center">
						<p>এখানে নতুন? তবে সাইনআপ করুন <Link className='text-white' to="/register">সাইনআপ</Link></p>
					</div>
				</form>
				<div className='text-white text-center font-Kalpurush-bold text-2xl my-4'>অথবা</div>
				<div className="flex items-center justify-center gap-4 flex-col">
					<button className="gmail-login-button flex items-center gap-4">
						<FcGoogle /> গুগল দিয়ে লগইন করুন
					</button>
					<button className="gmail-login-button flex items-center gap-4">
						<RiFacebookBoxFill fill="#0866FF" /> ফেসবুক দিয়ে লগইন করুন
					</button>
				</div>

			</div>
		</div>
	)
}

export default Login