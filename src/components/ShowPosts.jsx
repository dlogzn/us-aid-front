import React from 'react'
import PostCard from './PostCard'

const ShowPosts = () => {
	return (
		<section className='dark-blue-bg relative py-24'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-3 gap-8'>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
					<PostCard></PostCard>
				</div>
			</div>
		</section>
	)
}

export default ShowPosts