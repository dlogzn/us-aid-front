import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import poster_sample_1 from '../assets/poster-sample-1.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const PosterGallery = () => {
	return (
		<>
			<section className='blue-bg-img'>
				<div className='container mx-auto pt-12 md:pt-20 pb-12 md:pb-36 pl-12 pr-12'>
					<div className='text-center font-Kalpurush-bold'><h2 className='text-white text-3xl md:text-6xl font-Kalpurush-bold mb-12 md:mb-24'>পোস্টার গ্যালারী</h2></div>
					<Swiper
						navigation={true}
						modules={[Pagination, Navigation, Autoplay]}
						autoplay={{ delay: 5000 }}
						className="mySwiper pl-14 pr-14 verticalSlider"
						spaceBetween={30}
						slidesPerView={4}
						breakpoints={{
							0: {
							  slidesPerView: 1,
							},
							400:{
							  slidesPerView:2,
							},
							639: {
							  slidesPerView: 3,	
							  //direction: 'vertical'
							},
							865:{
							  slidesPerView:4
							},
							1000:{
							  slidesPerView:4
							},
							1500:{
							  slidesPerView:4
							},
							1700:{
							  slidesPerView:4
							}
						  }}
					>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={poster_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	)
}

export default PosterGallery