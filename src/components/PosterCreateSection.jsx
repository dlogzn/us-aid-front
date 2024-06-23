import React from 'react'
import UploadImg from '../assets/imageupload-section.jpg'
import Finalimage from '../assets/final-output-section.jpg'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const PosterCreateSection = () => {
	return (
		<section className='light-blue-bg-img relative' id="makePoster">
			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='mx-auto w-9/12 md:w-[550px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-3xl md:text-5xl py-5 px-6 border-2 text-blue-dark '>পোস্টার তৈরি করুন</div>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-center md:justify-between mt-12 md:mt-32 items-center md:items-start gap-8 md:gap-0'>

					<div>
						<div className='font-Kalpurush-bold font-Kalpurush-bold text-center mb-4 py-4 bg-white text-2xl'>ছবি আপলোড করুন</div>
						<img src={UploadImg} alt=""/>
					</div>
					<div>

						<img src={Finalimage} alt=""/>
					</div>

					<div className='px-4'>
						<div className='font-Kalpurush-bold font-Kalpurush-bold text-center mb-4 py-4 bg-white text-2xl'>স্লোগান নির্বাচিত করুন</div>
						<div className='slogan max-w-60'>
							<Swiper
								slidesPerView={4}
								spaceBetween={10}
								direction={'vertical'}
								navigation={true}
								autoplay={{ delay: 2000 }}
								modules={[Pagination, Navigation, Autoplay]}
								className="sloganSelect"
							>
								<SwiperSlide>যানজটমুক্ত শহর চাই</SwiperSlide>
								<SwiperSlide>দূষণমুক্ত পরিবেশ চাই</SwiperSlide>
								<SwiperSlide>ন্যায্য মূল্যে কিনতে চাই</SwiperSlide>
								<SwiperSlide>চাকরির নিশ্চয়তা চাই</SwiperSlide>
								<SwiperSlide>যানজটমুক্ত শহর চাই</SwiperSlide>
								<SwiperSlide>দূষণমুক্ত পরিবেশ চাই</SwiperSlide>
								<SwiperSlide>ন্যায্য মূল্যে কিনতে চাই</SwiperSlide>
								<SwiperSlide>চাকরির নিশ্চয়তা চাই</SwiperSlide>
							</Swiper>
						</div>
					</div>

				</div>

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
			
		</section>
	)
}

export default PosterCreateSection