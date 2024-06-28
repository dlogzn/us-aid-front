import React, { useContext, useEffect, useRef, useState } from 'react'
import Finalimage from '../assets/final-output-section.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaCircleArrowUp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import axios from 'axios';
import UploadImg from '../assets/image-holder.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageUploadField from './ImageUploadField';
import Swal from 'sweetalert2';
import AuthProvider, { AuthContext } from '../providers/AuthProvider';


const PosterCreateSection = () => {	

	const { isLoggedIn } = useContext(AuthContext);	
	const [data, setData] = useState([]);
	const [selectedSlogan, setSelectedSlogan] = useState('');
	const [selectedSloganId, setSelectedSloganId] = useState('');

	useEffect(() => {
	  // Replace 'your-api-endpoint' with the actual API endpoint
	  axios.get('https://businessautomata.com/us-aid-api/api/get/topics')
		.then(response => {			
		  setData(response.data.payload);
		})
		.catch(error => {
		  console.error("There was an error fetching the data!", error);
		});
	}, []);
  
	const handleClick = (topicId, topicTitle) => {	  
		setSelectedSlogan(topicTitle);
		setSelectedSloganId (topicId)
	};
  
	const settings = {
		dots: false,
		vertical: true,
		verticalSwiping: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		draggable: true,
		autoplay: true, 
		autoplaySpeed: 2000,
	};

	const [selectedImage, setSelectedImage] = useState(null);
	const [previewUrl, setPreviewUrl] = useState(UploadImg);
	const [file, setFile] = useState(UploadImg)
  
	const handleImageChange = (event) => {
		
		const file = event.target.files[0];
		const file2 = event.target.files[0];
		if (file2) {
			setSelectedImage(file2);
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result);
			};
			reader.readAsDataURL(file2);
		}
		setFile(event.target.files[0])

	};
	
	//console.log( 'file here:' ,file);	

	const token = localStorage.getItem('token');

	const handlePosterCreation = (e) => {
		e.preventDefault();

		if(isLoggedIn) {

			let rawImageFile = file;
			let posterSloganText = e.target.posterSloganText.value;
			//console.log( 'poster data: ' , rawImageFile , posterSloganText );

			// Create a new poster
			//Member API for Production
			let fd = new FormData()
			fd.append("photo", selectedImage)
			fd.append("topic_id", selectedSloganId)	
			
			const token = localStorage.getItem('token');
			const headers = {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json'
			};

			const photoValue = fd.get("photo");
			const topicIdValue = fd.get("topic_id");

			if (photoValue && topicIdValue) {
				console.log("Photo and Topic ID are ready");
					
				axios.post("https://businessautomata.com/us-aid-api/api/member/posters", fd, {headers: headers}).then((response) => {
					console.log(response.status, response.data);
					if (response.data.payload.id) {
						Swal.fire({
						title: 'সফল!',
						text: 'পোস্ট সফল হয়েছে',
						icon: 'success',
						confirmButtonText: 'Cool',
						});
					}
				});
				
			} else {
				console.log("Photo or Topic ID is missing");
				toast.error('ছবি ও স্লোগান সঠিকভাবে দিন' , { position: "top-right",
					autoClose: 3500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				 });
				 console.log('data nai');
			}

		} else {
			toLoginPage('/login');			
		}
	}

	return (
		<section className='light-blue-bg-img relative' id="makePoster">

			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='mx-auto w-9/12 md:w-[550px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-3xl md:text-5xl py-5 px-6 border-2 text-blue-dark '>পোস্টার তৈরি করুন</div>
					</div>
				</div>
				<form onSubmit={handlePosterCreation}>
					<div className='flex flex-col md:flex-row justify-center md:justify-between mt-12 md:mt-32 items-center md:items-start gap-8 md:gap-0'>

						<div>
							<div className='font-Kalpurush-bold text-center mb-4 py-4 yellowBg text-2xl'>ছবি আপলোড করুন</div>
							<ImageUploadField previewUrl={previewUrl} previewUrl1={previewUrl} file1={file}  handleImageChange={handleImageChange}></ImageUploadField>
						</div>
						<div>
							<img src={Finalimage} alt=""/>						
						</div>

						<div className='px-4'>
							<div className='font-Kalpurush-bold text-center mb-4 py-4 yellowBg text-2xl'>স্লোগান নির্বাচিত করুন</div>
							<div className='slogan max-w-72 min-w-72'>
								<Slider {...settings}>
									{data.map((item, index) => (
									<div className='sloganSelect-slick' key={index} onClick={() => handleClick(item.id, item.title )}>
										<h3 className='font-Kalpurush-bold'>{item.title}</h3>
									</div>
									))}
								</Slider>
							</div>
							<div className='slogan max-w-72 min-w-72 mt-12'>
								<div className='font-Kalpurush-bold text-center mb-4 py-4 yellowBg text-2xl'>নির্বাচিত স্লোগান</div>
								<input name='posterSloganTextOnly' className='font-Kalpurush-bold p-2 w-full' type="text" value={selectedSlogan} readOnly placeholder="নির্বাচিত স্লোগান এখানে দেখাবে"	/>
								<input name='posterSloganText' className='font-Kalpurush-bold p-2 w-full' type="hidden" value={selectedSloganId} readOnly placeholder="নির্বাচিত স্লোগান এখানে দেখাবে"	/>
							</div>
							<div className='flex w-full md:w-auto justify-center mt-10'>
								<button className="btn bg-white text-3xl text-[#EA2027] font-Kalpurush-bold font-bold"><FaCircleArrowUp />পোস্টার তৈরি করুন</button>
							</div>
						</div>

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

export default PosterCreateSection