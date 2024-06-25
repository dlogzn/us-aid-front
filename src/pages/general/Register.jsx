import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';


const Register = () => {

	const navigate = useNavigate();
	
	const [formData, setFormData] = useState({ name: '', occupation: '', address: '',  email: '', password: ''});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {

		const updatedFormData = { ...formData, [e.target.name]: e.target.value };
	  
		// Password-specific validation logic
		if (e.target.name === 'password') {
			const newPassword = e.target.value;
			const hasUppercase = /[A-Z]/.test(newPassword);
			const hasLowercase = /[a-z]/.test(newPassword);
			const hasMinLength = newPassword.length >= 6;
	  
			// Update errors state based on password validation
			if (!hasMinLength) {
				setErrors({ ...errors, password: ['Password must be at least 6 characters long!'] });
			} else if (!hasUppercase || !hasLowercase) { // Add more conditions if needed
				setErrors({ ...errors, password: ['Password must contain uppercase and lowercase characters!'] });
			} else {				
				setErrors({ ...errors, password: [] });
			}
		}
		console.log(updatedFormData);
		// Update form data state
		setFormData(updatedFormData);
	};
	console.log(formData);

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		console.log(formData);

		try {
			const response = await axios.post('https://businessautomata.com/us-aid-api/api/auth/register', formData);
			console.log(response.data);
				
			if (response.data.payload.user.id) {
				Swal.fire({
					title: 'সফল!',
					text: 'রেজিস্ট্রেশন সফল হয়েছে',
					icon: 'success',
					confirmButtonText: 'লগইন করুন'
				}).then((result) => {				
					if (result.isConfirmed) {
						navigate("/login");
					}
				})
			}
		} catch (error) {
			if (error.response) {
				setErrors(error.response.data.errors);
			}
		}

		// fetch(`https://businessautomata.com/us-aid-api/api/auth/register`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'content-type': 'application/json'
		// 	},

		// 	body: JSON.stringify({
		// 		name: 'john1',	
		// 		occupation: 'Ampeople',
		// 		address: 'agargaon',
		// 		email: 'john1@gmail.com',
		// 		password: 'A123123a!!',
		// 	})
		// })
		// .then((response) => {
		// 	if(!response.ok) throw new Error(response.status);
		// 	else return response.json();
		// })
		// .then(data => {
			
		// 	console.log('After add return: ' , data);
		// 	/*	
		// 	if (data.payload.id) {
		// 		Swal.fire({
		// 			title: 'সফল!',
		// 			text: 'রেজিস্ট্রেশন সফল হয়েছে',
		// 			icon: 'success',
		// 			confirmButtonText: 'Cool'
		// 		})
		// 	}
		// 	*/
			
		// })

	};

	/*Previous for Firebase only*/
	const { createUser, signInWithGoogle } = useContext(AuthContext);

	// const handleRegister = e =>{
	// 	e.preventDefault();
		
	// 	const name = e.target.name.value;
	// 	const email = e.target.email.value;
	// 	const password = e.target.password.value;
	// 	const userPhotoUrl = e.target.url.value;
	// 	console.log(name, email, password);
		
	// 	createUser(email, password)
	// 		.then(result=>{
	// 			toast('Registration successful');
	// 			console.log(result.user)

	// 		})
	// 		.catch( error=>{
	// 			console.error(error);
	// 		}
	// 	)
	// }

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

	return (
		<div className='flex justify-center items-center bg-common-bg bg-no-repeat bg-cover pt-[150px] md:pt-[5%] pb-[100px] md:pb-[5%] px-4 mt-[-75px] md:mt-0'>
			<div className='login-box max-w-md min-w-80 '>
				<div className='font-Kalpurush-bold text-white text-3xl text-center mb-8'>পোস্টার বানাতে, ভিডিও বানাতে বা আপনার দাবি জানাতে সাইনআপ করুন</div>
				<form onSubmit={handleSubmit} className="max-w-md min-w-80">

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">নাম</span></label>
						<input name='name' type="text" placeholder="আপনার নাম" className="input input-bordered" required value={formData.name} onChange={handleChange} />
						{errors.name && <div>{errors.name[0]}</div>}						
					</div>

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পেশা</span></label>
						<input name='occupation' type="text" placeholder="আপনার পেশা" className="input input-bordered" required value={formData.occupation} onChange={handleChange} />
						{errors.name && <div>{errors.name[0]}</div>}						
					</div>

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">জেলা বা প্রতিষ্ঠান বা এলাকার নাম</span></label>
						<input name='address' type="text" placeholder="আপনার জেলা বা প্রতিষ্ঠান বা এলাকার নাম " className="input input-bordered" required value={formData.address} onChange={handleChange} />
						{errors.name && <div>{errors.name[0]}</div>}						
					</div>

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">ইমেইল</span></label>
						<input name='email' type="email" placeholder="আপনার ইমেইল" className="input input-bordered" required value={formData.email} onChange={handleChange} />
						{errors.email && <div>{errors.email[0]}</div>}
					</div>

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পাসওয়ার্ড</span></label>
						<input name='password' type="password" placeholder="password" className="input input-bordered" required value={formData.password} onChange={handleChange} />
						{errors.password && <div>{errors.password[0]}</div>}
					</div>

					{/* <div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">পাসওয়ার্ড আবার দিন</span></label>
						<input type="password" name="password_confirmation" className="input input-bordered" value={formData.password_confirmation} onChange={handleChange} />
					</div> */}

					<div className="form-control mt-6">
						{errors && (
							<button className="btn btn-primary font-Kalpurush-bold">সাইনআপ</button>
						)}
						{!errors && (
							<button disabled="disabled" className="btn btn-primary font-Kalpurush-bold">সাইনআপ</button>
						)}
					</div>
					<div className="mt-4 text-center">
						<p>সাইনআপ করা হয়েছে? তবে লগইন করুন <Link className='text-white' to="/login">সাইন ইন</Link></p>
					</div>
				</form>

				{/* <div className='text-white text-center font-Kalpurush-bold text-2xl my-4'>অথবা</div>
				<div className="flex items-center justify-center gap-4 flex-col">
					<button className="gmail-login-button flex items-center gap-4" onClick={signUpWithGoogle}>
						<FcGoogle /> গুগল দিয়ে সাইনআপ করুন
					</button>
					<button className="gmail-login-button flex items-center gap-4">
						<RiFacebookBoxFill fill="#0866FF" /> ফেসবুক দিয়ে সাইনআপ করুন
					</button>
				</div> */}

			</div>
			<ToastContainer />
		</div>		
	)
}

export default Register