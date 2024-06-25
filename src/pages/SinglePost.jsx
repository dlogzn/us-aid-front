import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {

	const postSingle = useLoaderData();

	const { topic, title, content, user, deterrent  } = postSingle.payload;

	return (
		<div className='flex justify-center items-center bg-common-bg bg-no-repeat bg-cover pb-[20px] md:pb-[2%] px-4 mt-[-75px] md:mt-0'>
			<div className='container mx-auto pt-12 md:pt-20 pb-8 md:pb-12'>
			<div className='text-center font-Kalpurush-bold'><h2 className='text-white text-3xl md:text-6xl font-Kalpurush-bold mb-8 md:mb-12'>{ topic.title }</h2></div>
				<div className='single-post-card bg-white border-2 border-black rounded-[22px] p-8'>
					<p className='text-xl text-black'>{ topic.title }</p>
					<p className='text-4xl text-black'>{title}</p>
					<p className='pb-4 text-black'>{user.name}, {user.occupation}, {user.address}</p>
					{ <div className='text-xl font-semibold text-black font-Kalpurush-bold min-h-[140px]' dangerouslySetInnerHTML={{ __html: content }} /> }

				</div>
			</div>
		</div>
	)
}

export default SinglePost