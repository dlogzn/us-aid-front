import React from 'react';
import VictoryImg from '../assets/second-screen-img.png';
import HashTagAmioJitteCai from '../assets/hashtag-amio-jitte-cai.png'

const WelcomeSection = () => {
	return (
		<section className='bg-[#362164] flex pt-12 md:pt-24 pl-4 pr-4'>
			<div className='container mx-auto flex gap-4 md:flex-nowrap flex-wrap'>
				<div className='md:w-1/2 w-full'>
					<div className='px-[5%]'>
						<p className='text-white text-center text-3xl pb-10 font-Kalpurush-bold font-medium'>
							নির্বাচনে জিততে চায় সবাই।<br />জিততে চায় নেতা,<br />জিততে চায় রাজনৈতিক দল।<br />কিন্তু আমার জেতার কথা<br />বলে কয় জন?<br />প্রিয় নেতা মনে রাখবেন,<br />আমার চাওয়া গুলো পূর্ণ হলেই<br />সবার বিজয় হবে।<br />কারণ<br/> জিতলে আমি,<br />জিতবেন আপনিও।
						</p>					
					</div>
					<div className="mb-24 text-center">
						<img src={HashTagAmioJitteCai}	alt='#AmioJitteCai' className='mx-auto'/>
					</div>
				</div>
				<div className='w-full md:w-1/2 flex justify-center md:justify-end'>
					<img src={VictoryImg} alt="" />
				</div>
			</div>
		</section>
	)
}

export default WelcomeSection
