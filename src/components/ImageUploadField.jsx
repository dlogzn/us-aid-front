import React, { useState } from 'react'
import UploadImg from '../assets/image-holder.jpg'

const ImageUploadField = ({file1, previewUrl1, handleImageChange}) => {
  
	return (
	  <div style={{ textAlign: 'center', marginTop: '50px' }}>
		<input name='rawImageFile' type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '20px' }} />
		{file1 && (
		  <div>
			<img
			  src={previewUrl1}
			  alt="Selected"
			  style={{ width: '300px', height: 'auto' }}
			/>
		  </div>
		)}
	  </div>
	);
}

export default ImageUploadField