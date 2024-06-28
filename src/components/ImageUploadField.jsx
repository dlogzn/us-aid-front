import React, { useContext, useState } from 'react'
import UploadImg from '../assets/image-holder.jpg'
import AuthProvider, { AuthContext } from '../providers/AuthProvider';
import { FaUserTie } from "react-icons/fa";

const ImageUploadField = ({file1, previewUrl1, handleImageChange}) => {

	const { isLoggedIn } = useContext(AuthContext);
  
	return (
	  <div style={{ textAlign: 'center', marginTop: '40px' }}>
		{isLoggedIn ? (
			<input name='photo' type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '20px' }} />
		) : (
			<div className='flex w-full md:w-auto justify-center mb-8'>
				<button className="btn bg-white text-normal text-[#EA2027] font-Kalpurush-bold font-bold"><FaUserTie />ছবি আপলোড করতে লগইন করুন</button>
			</div>
		)}
		
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