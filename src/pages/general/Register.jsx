import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

	const { createUser, signInWithGoogle } = useContext(AuthContext);	

	const handleRegister = e =>{
		e.preventDefault();
		
		const name = e.target.name.value;
		const email = e.target.email.value;
		const password = e.target.password.value;
		const userPhotoUrl = e.target.url.value;
		console.log(name, email, password);
		
		createUser(email, password)
			.then(result=>{
				toast('Registration successful');
				console.log(result.user)

			})
			.catch( error=>{
				console.error(error);
			}
		)
	}

	const signUpWithGoogle = async () => {
		console.log('Signup with Google');
		
		signInWithGoogle()
		.then( result=> {
				console.log(result.user);
				toast('Signed in Successfully');
				// data in the database post - so that 
				navigateAfterLogin(location?.state ? location.state : '/' );
			}
		)
		.catch(error=>{ 
			toast('wrong Username and Password');	
			console.error(error)
		})
		
	};

	/*checking conditions*/
	const [password, setPassword] = useState('');
	const [isValid, setIsValid] = useState(true);
	
	const handleChangePass = (event) => {
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
				<div className='font-Kalpurush-bold text-white text-3xl text-center mb-8'>পোস্টার বানাতে, ভিডিও বানাতে বা আপনার দাবি জানাতে সাইনআপ করুন</div>
				<form onSubmit={handleRegister} className="max-w-md min-w-80">

					<div className="form-control">
					<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">নাম</span></label>
						<input name='name' type="text" placeholder="আপনার নাম" className="input input-bordered" required />
					</div>
					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">ইমেইল</span></label>
						<input name='email' type="email" placeholder="আপনার ইমেইল" className="input input-bordered" required />
					</div>

					<div className="form-control">
					<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পাসওয়ার্ড</span></label>
						<input name='password' type="password" onChange={handleChangePass} placeholder="password" className="input input-bordered" required />
						{!isValid && (
							<p className="text-sm mt-2" style={{ color: 'red' }}>
								Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.
							</p>
						)}
					</div>
					<div className="form-control mt-6">
						{isValid && (
							<button className="btn btn-primary font-Kalpurush-bold">সাইনআপ</button>
						)}
						{!isValid && (
							<button disabled="disabled" className="btn btn-primary font-Kalpurush-bold">সাইনআপ</button>
						)}
					</div>
					<div className="mt-4">
						<p>সাইনআপ করা হয়েছে? তবে লগইন করুন <Link className='text-white' to="/login">সাইন ইন</Link></p>
					</div>
				</form>
				<div className='text-white text-center font-Kalpurush-bold text-2xl my-4'>অথবা</div>
				<div className="flex items-center justify-center gap-4 flex-col">
					<button className="gmail-login-button flex items-center gap-4" onClick={signUpWithGoogle}>
						<FcGoogle /> গুগল দিয়ে সাইনআপ করুন
					</button>
					<button className="gmail-login-button flex items-center gap-4">
						<RiFacebookBoxFill fill="#0866FF" /> ফেসবুক দিয়ে সাইনআপ করুন
					</button>
				</div>
			</div>
		</div>
	)
}

export default Register