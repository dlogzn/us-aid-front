import React, { useEffect, useState } from 'react'

const ButtonLeft = () => {

	const [isVisible, setIsVisible] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 950) {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		
		<div className={`fixed top-auto md:top-1/2 bottom-0 md:bottom-1/2 transition-all ease-in-out delay-700 duration-700 ${isVisible ? 'left-[-250px]' : 'left-0'}`}>
			<ul className='flex flex-col gap-1'>
				<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[55px] md:min-w-[75px] block text-center' href="#makePoster">পোস্টার</a></li>
				<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[55px] md:min-w-[75px] block text-center' href="#makeVideo">ভিডিও</a></li>
				<li className=''><a className='text-blue-dark font-bold darkYellowBg border rounded-r-lg font-Kalpurush-bold border-white px-2 py-3 min-w-[55px] md:min-w-[75px] block text-center' href="#makePost">লিখুন</a></li>
			</ul>
		</div>

	)
}

export default ButtonLeft