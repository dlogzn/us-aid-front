import React from 'react'
import BlogPostBtn from '../assets/blog-post-button.png';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const WritePostSection = () => {
	return (
		<section className='blue-bg-img relative' id="makePost">
			<div className='container mx-auto'>
				<div className='text-center'>
					<div className='mx-auto w-[350px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-5xl py-5 px-6 border-2 text-blue-dark '>লিখুন</div>
					</div>
				</div>
				<div className='whiteBox mt-16 text-2xl rounded-3xl font-bold p-10'>
					<p className='font-Kalpurush-bold text-blue-dark'>জিততে চায় সবাই। জিততে চায় নেতা, জিততে চায় রাজনৈতিক দল। কিন্তু আমার জেতার কথা বলে কয় জন?</p>
					<br />
					<p className='font-Kalpurush-bold text-blue-dark'> আমি চাই, নাগরিক দাবির কথায় কেউ মুখ চেপে ধরবে না। আগে বাড়ি ফিরতে হবে না। নিরাপদে আমি চলাফেরা করতে পারব যখন তখন। আদিবাসী বলে আমার উপরে চালানো হবে না আক্রমণ। ধর্মীয় সংখ্যালঘু বলে আমার বাসা বাড়ি প্রার্থনা ঘর ভেঙে দেওয়া হবে না। ক্ষমতাধরদের কাছে আইন-শৃঙ্খলা বাহিনী জিম্মি হয়ে থাকবে না। সিন্ডিকেট করে নিত্য প্রয়োজনীয় জিনিসের দাম ইচ্ছামতন বাড়ানো হবে না। ঘন্টার পর ঘন্টা যানজটে আটকে থাকতে হবে না। লোডশেডিং কিংবা জলাবদ্ধতায় ব্যাহত হবেনা জনজীবন। আমি চাই, সকল স্বাস্থ্যসেবার সুবিধা সহ হাসপাতাল হবে পাহাড়ে আর গ্রামগঞ্জে। ভুল চিকিৎসায় ভুল ব্যবস্থাপনায় জবাবদিহি করতে হবে কর্তৃপক্ষকে। খুলে রাখা রাস্তা কাজ শেষে মেরামত করতে হবে। দুর্নীতিবাজদের, অবৈধ অর্থ পাচারকারীদের আইনের আওতায় আনা হবে। </p>
					<br />
					<p className='font-Kalpurush-bold text-blue-dark'> আমি চাই, লেখাপড়া শেষে নিশ্চিত করা হবে আমার কর্মসংস্থান। আমি চাই জাতি বর্ণ নির্বিশেষে সকলেই পাবেন নাগরিকের সম্মান। </p>
					<br />
					<p className='font-Kalpurush-bold text-blue-dark'> নির্বাচনে শুধু নেতা নয়, দল নয়, আমারও জিততে হবে। আমার চাওয়া গুলো পূরণ হলেই জনতার বিজয় হবে। </p>
					<br />
					<p className='font-Kalpurush-bold text-blue-dark'> আমিও জিততে চাই। কারণ আমার জয়েই আপনার আসল বিজয়।</p>
				</div>
				<div className='flex items-center gap-8 mt-8 pb-24'>
					<div className='w-1/3'></div>
					<div>
						<img src={BlogPostBtn} alt='Blog Post' />
					</div>
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

export default WritePostSection