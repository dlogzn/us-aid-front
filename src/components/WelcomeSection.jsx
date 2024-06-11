import React from 'react';
import VictoryImg from '../assets/second-screen-img.png';

const WelcomeSection = () => {
	return (
		<section className='bg-[#362164] flex pt-24'>
			<div className='container mx-auto flex gap-4'>
				<div className='w-1/2'>
					<div className='px-56'>
						<p className='text-white text-center text-3xl pb-10 font-Kalpurush-bold'>
							নির্বাচনে জিততে চায় সবাই। জিততে চায় নেতা, জিততে চায় রাজনৈতিক দল। কিন্তু আমার জেতার কথা বলে কয় জন? প্রিয় নেতা মনে রাখবেন, আমার চাওয়া গুলো পূর্ণ হলেই সবার বিজয় হবে। কারণ জিতলে আমি জিতবেন আপনিও।
						</p>					
					</div>
					<div>
						<p className='text-[#6CCCF2] text-6xl font-bold text-center'>#AMIOJITTECHAI</p>					
					</div>
				</div>
				<div className='w-1/2 flex justify-end'>
					<img src={VictoryImg} alt="" />
				</div>
			</div>
		</section>
	)
}

export default WelcomeSection
