import React, { useContext, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import UploadVideo from '../assets/video-holder.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaCircleArrowUp } from "react-icons/fa6";
import { FaUserTie, FaWhatsapp } from "react-icons/fa";
import AuthProvider, { AuthContext } from '../providers/AuthProvider';

const VideoCreateSection = () => {

	const { isLoggedIn } = useContext(AuthContext);

	const [videoFile, setVideoFile] = useState(null);

	const handleVideoCreation = (event) => {
	  event.preventDefault();
  
	  // Get the uploaded file
	  const uploadedFile = event.target.files[0];
  
	  // Basic validation (optional)
	  if (!uploadedFile || !uploadedFile.type.startsWith('video/')) {
		console.error('Invalid file uploaded. Please select a video file.');
		return;
	  }
  
	  // Update state with the uploaded file
	  setVideoFile(uploadedFile);
  
	};

	console.log(videoFile);


	const handleVideoChange = () => {
		console.log('video');
	}

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
								<input name='video' type="file" accept="video/*" onChange={handleVideoCreation} style={{ marginBottom: '15px' }} />
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