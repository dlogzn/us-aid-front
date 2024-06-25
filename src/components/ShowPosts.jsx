import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import axios from 'axios';

const ShowPosts = () => {

	const [homePagePosts, sethomePagePosts] = useState([]);

  useEffect ( ()=> {
	
	  fetch(`https://businessautomata.com/us-aid-api/api/get/posts?limit=6`, {
		  method: 'GET',
		  headers: {
			  'content-type': 'application/json'
		  },			
	  })
	  .then(res => res.json())
	  .then(data => {			
			sethomePagePosts(data.payload);
	  })

  } , []);

return (
		<section className='dark-blue-bg relative px-4 md:px-0 py-24'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{
						homePagePosts.map( (homePagePostsData, index) =><PostCard key={index} homePagePostsData={homePagePostsData}></PostCard> )
					}
				</div>
			</div>
		</section>
	)
}

export default ShowPosts