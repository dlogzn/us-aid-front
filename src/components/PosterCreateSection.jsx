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
		<section className='blue-bg-img relative' id="makePost">
			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='mx-auto w-[350px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-5xl py-5 px-6 border-2 text-blue-dark '>পোস্টার তৈরি করুন</div>
					</div>
				</div>

				<div>
					<div>
						<img src={UploadImg} alt=""/>
					</div>
					<div><img src={Finalimage} alt=""/></div>
					<div>
						<div className='font-Kalpurush-bold'>স্লোগান নির্বাচিত করুন</div>
						<div className='slogan'>
						<Swiper
							slidesPerView={3}
							spaceBetween={30}
							direction={'vertical'}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className="sloganSelect"
						>
							<SwiperSlide>Slide 1</SwiperSlide>
							<SwiperSlide>Slide 2</SwiperSlide>
							<SwiperSlide>Slide 3</SwiperSlide>
							<SwiperSlide>Slide 4</SwiperSlide>
							<SwiperSlide>Slide 5</SwiperSlide>
							<SwiperSlide>Slide 6</SwiperSlide>
							<SwiperSlide>Slide 7</SwiperSlide>
							<SwiperSlide>Slide 8</SwiperSlide>
							<SwiperSlide>Slide 9</SwiperSlide>
						</Swiper>
						</div>
					</div>
				</div>

				<div className='flex items-center gap-8 mt-8 pb-24'>
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
			<div className='absolute top-1/2 bottom-1/2 left-0'>
				<ul className='flex flex-col gap-1'>
					<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[125px] block text-center' alt="#makePoster">পোস্টার</a></li>
					<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[125px] block text-center' alt="#makeVideo">ভিডিও</a></li>
					<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[125px] block text-center' alt="#makePost">লিখুন</a></li>
				</ul>
			</div>
		</section>
	)
}

export default PosterCreateSection