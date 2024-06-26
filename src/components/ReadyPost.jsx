import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ReadyPost = ({postData}) => {

	console.log(postData);

	const { topic, title, content, user, deterrent  } = postData;

	const truncateText = (text, wordLimit) => {
		const words = text.split(' ');
		if (words.length <= wordLimit) {
			return text;
		}
		return words.slice(0, wordLimit).join(' ') + '...';
	};

	return (
		<>
			<div className='single-post-card darkYellowBg rounded-[22px] p-8 mt-10'>
				<p className='text-xl text-black'>{ topic.title }</p>
				<p className='text-4xl text-black'>{title}</p>
				<p className='pb-4 text-black'>{user.name}, {user.occupation}, {user.address} {deterrent}</p>
				{ <div className='text-normal font-semibold text-black font-Kalpurush-bold min-h-[140px]' dangerouslySetInnerHTML={{ __html: content }} /> }
				{/* <div className='flex justify-end'>				
					<Link className='bg-black rounded-lg font-Kalpurush-bold text-white py-2 px-4' to={`/post-detail/${deterrent}`}>আরো পড়ুন</Link>				
				</div> */}
			</div>
			<div className='flex items-center justify-center flex-wrap gap-8 mt-8 pb-24'>
				<div className='flex w-full md:w-auto justify-center'>
					<ul className='flex gap-8'>
						<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaFacebookF /></a></li>
						<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaInstagram /></a></li>
						<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaTwitter /></a></li>
						<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaWhatsapp /></a></li> 
					</ul>
				</div>
			</div>
		</>
	)
}

export default ReadyPost