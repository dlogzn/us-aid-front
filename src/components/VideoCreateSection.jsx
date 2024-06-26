import React, { useContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import UploadVideo from '../assets/video-holder.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaCircleArrowUp } from "react-icons/fa6";
import { FaUserTie, FaWhatsapp } from "react-icons/fa";
import AuthProvider, { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';

const VideoCreateSection = () => {

	const { isLoggedIn } = useContext(AuthContext);

	const [videoFile, setVideoFile] = useState(null);

	const handleVideoCreationChange = (event) => {
	  event.preventDefault();
  
	  // Get the uploaded file
	  const uploadedFile = event.target.files[0];
	  setVideoFile(uploadedFile);
	  console.log(uploadedFile);
	}

	const handleVideoCreation = (event) => {
		event.preventDefault();

		// Get the uploaded file
		const uploadedFile = videoFile;
		let fd = new FormData()
		fd.append("video", videoFile)	
		console.log(videoFile);

		// Basic validation (optional)
		if (!uploadedFile || !uploadedFile.type.startsWith('video/')) {
			console.error('Invalid file uploaded. Please select a video file.');
		return;
	}
  
	  const token = localStorage.getItem('token');
	  const headers = {
		  'Authorization': `Bearer ${token}`,
		  'Accept': 'application/json'
	  };
	  // Update state with the uploaded file
		axios.post("https://businessautomata.com/us-aid-api/api/member/videos", fd, {headers: headers}).then((response) => {
			console.log(response.status, response.data);
/*
			if (response.data.payload.id) {
				Swal.fire({
				title: 'সফল!',
				text: 'পোস্ট সফল হয়েছে',
				icon: 'success',
				confirmButtonText: 'Cool',
				});
			}
				*/

		});
	  
  
	};

	console.log(videoFile);

	return (
		<section className='light-blue-bg-img relative' id="makePoster">
			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='mx-auto w-9/12 md:w-[550px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-3xl md:text-5xl py-5 px-6 border-2 text-blue-dark '>ভিডিও তৈরি করুন</div>
					</div>
				</div>
				<form onSubmit={handleVideoCreation}>
					<div className='flex flex-col justify-center items-center mt-12 md:mt-22 md:items-start gap-8 md:gap-0 '>						
						<div className='mx-auto'>
							<img className='mb-4' src={UploadVideo} alt=""/>
							{isLoggedIn ? (								
								<input name='video' type="file" accept="video/*" onChange={handleVideoCreationChange} style={{ marginBottom: '15px' }} />
							) : (
								<div className='flex w-full md:w-auto justify-center mb-8'>
									<button className="btn bg-white text-normal text-[#EA2027] font-Kalpurush-bold font-bold"><FaUserTie />ভিডিও আপলোড করতে লগইন করুন</button>
								</div>
							)}
							
						</div>	
						{isLoggedIn ? (					
						<div className='flex w-full items-center justify-center mt-10'>
							<button className="btn bg-white text-3xl text-[#EA2027] font-Kalpurush-bold font-bold"><FaCircleArrowUp />ভিডিও আপলোড করুন</button>
						</div>
						) : ''}
					</div>
				</form>

				<div className='flex justify-center items-center gap-8 mt-8 pb-24'>
					<div>
						<ul className='flex gap-8'>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaFacebookF /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaInstagram /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaTwitter /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaWhatsapp /></a></li> 
						</ul>
					</div>
				</div>
			</div>
			<ToastContainer />
		</section>
	)
}

export default VideoCreateSection