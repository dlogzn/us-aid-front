import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import video_sample_1 from '../assets/video-sample-1.jpg';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const VideoGallery = () => {
	return (
		<>
		<section className='blue-bg-img'>
			<div className='container mx-auto py-24'>
				<div className='text-center font-Kalpurush-bold'><h2 className='text-white text-6xl font-Kalpurush-bold mb-10 md:mb-24 '>ভিডিও গ্যালারী</h2></div>
				<div className='hidden md:block'>
					<Swiper
						navigation={{
							nextEl: ".image-swiper-button-next",
							prevEl: ".image-swiper-button-prev",
							disabledClass: "swiper-button-disabled"
						}}
						modules={[Pagination, Navigation, Autoplay]}
						autoplay={{ delay: 5000 }}
						className="mySwiper pl-24 pr-24 swiper-padding"
						spaceBetween={30}
						slidesPerView={4}
					>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 3" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 1" className="w-full h-auto" />
						</SwiperSlide>
						<SwiperSlide>
							<img src={video_sample_1} alt="Slide 2" className="w-full h-auto" />
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="grid grid-container-2 px-4 block md:hidden gap-4">
					<div className="grid-item"><img src={video_sample_1} alt="Slide 2" className="w-full h-auto" /></div>
					<div className="grid-item"><img src={video_sample_1} alt="Slide 2" className="w-full h-auto" /></div>
					<div className="grid-item"><img src={video_sample_1} alt="Slide 2" className="w-full h-auto" /></div>
					<div className="grid-item"><img src={video_sample_1} alt="Slide 2" className="w-full h-auto" /></div>
				</div>
				

			</div>
		</section>
	</>
	)
}

export default VideoGallery