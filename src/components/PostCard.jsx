import React from 'react'
import { Link } from 'react-router-dom';

const PostCard = ({ homePagePostsData }) => {

	const { topic, title, content, user, deterrent  } = homePagePostsData;	

	const truncateText = (text, wordLimit) => {
		const words = text.split(' ');
		if (words.length <= wordLimit) {
			return text;
		}
		return words.slice(0, wordLimit).join(' ') + '...';
	};
	
	return (
		<div className='single-post-card darkYellowBg rounded-[22px] p-8'>
			<p className='text-xl text-black'>{ topic.title }</p>
			<p className='text-4xl text-black'>{title}</p>
			<p className='pb-4 text-black'>{user.name}, {user.occupation}, {user.address}</p>
			{ <div className='text-normal font-semibold text-black font-Kalpurush-bold min-h-[140px]' dangerouslySetInnerHTML={{ __html: truncateText(content, 50) }} /> }
			<div className='flex justify-end'>				
				<Link className='bg-black rounded-lg font-Kalpurush-bold text-white py-2 px-4' to={`/post-detail/${deterrent}`}>আরো পড়ুন</Link>				
			</div>
		</div>
	)
}

export default PostCard