import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import slide_1 from '../assets/sllide-1.jpg';
import slide_2 from '../assets/sllide-2.jpg';
import slide_3 from '../assets/sllide-3.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
	return (
		<>
			<Swiper
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				autoplay={{ delay: 5000 }}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src={slide_1} alt="Slide 1" className="w-full h-auto" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide_2} alt="Slide 2" className="w-full h-auto" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide_3} alt="Slide 3" className="w-full h-auto" />
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default Banner