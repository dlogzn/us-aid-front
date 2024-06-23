import React, { useEffect, useState } from 'react'
import BlogPostBtn from '../assets/blog-post-button.png';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';
import { FaCircleArrowUp } from "react-icons/fa6";

import { 
	BtnBold, 
	BtnRedo,
	BtnUndo,
	BtnItalic, 
	createButton, 
	Editor, 
	EditorProvider, 
	Toolbar
  } from 'react-simple-wysiwyg';


const WritePostSection = () => {

	const [allTopics, setAllTopics] = useState([]);

	useEffect ( ()=> {
	
		fetch(`https://businessautomata.com/us-aid-api/api/get/topics`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			},
		})
		.then(res => res.json())
		.then(data => {			
			setAllTopics(data.payload);
		})
  
	} , []);



	const handlePostCreation = e =>{
		e.preventDefault();
		
		// topic_id, title, content

		const topicsid = e.target.topicsid.value;
		const content = html;
		console.log(topicsid, content);

		fetch(`https://businessautomata.com/us-aid-api/api/create/post`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'content-type': 'application/json'
			},

			body: JSON.stringify({
				topic_id: topicsid,				
				title: 'টাইটেল',
				content: content,
			})
		})
		.then((response) => {
			if(!response.ok) throw new Error(response.status);
			else return response.json();
		})
		.then(data => {
			
			console.log('After add return: ' , data);

			if (data.payload.id) {
				Swal.fire({
					title: 'সফল!',
					text: 'পোস্ট সফল হয়েছে',
					icon: 'success',
					confirmButtonText: 'Cool'
				})
				// Navigate to my booking Class
				//navigateAfterConfirmed(hereAgain.pathname);		

				const id = data.payload.id;

				// Getting the latest post
				fetch(`https://businessautomata.com/us-aid-api/api/get/post?post_id=${id}`, {
					method: 'GET',
					headers: {
						'content-type': 'application/json'
					},			
				})
				.then(res => res.json())
				.then(data => {
					console.log('Getting latest post: ' , data);					
				})

			}
			
		})

	}
	

	const [editorContent, setEditorContent] = useState('');

	const [html, setHtml] = useState("<div>জিততে চায় সবাই। জিততে চায় নেতা, জিততে চায় রাজনৈতিক দল। কিন্তু আমার জেতার কথা বলে কয় জন?</div><div>আমি চাই, নাগরিক দাবির কথায় কেউ মুখ চেপে ধরবে না। আগে বাড়ি ফিরতে হবে না। নিরাপদে আমি চলাফেরা করতে পারব যখন তখন। আদিবাসী বলে আমার উপরে চালানো হবে না আক্রমণ। ধর্মীয় সংখ্যালঘু বলে আমার বাসা বাড়ি প্রার্থনা ঘর ভেঙে দেওয়া হবে না। ক্ষমতাধরদের কাছে আইন-শৃঙ্খলা বাহিনী জিম্মি হয়ে থাকবে না। সিন্ডিকেট করে নিত্য প্রয়োজনীয় জিনিসের দাম ইচ্ছামতন বাড়ানো হবে না। ঘন্টার পর ঘন্টা যানজটে আটকে থাকতে হবে না। লোডশেডিং কিংবা জলাবদ্ধতায় ব্যাহত হবেনা জনজীবন। আমি চাই, সকল স্বাস্থ্যসেবার সুবিধা সহ হাসপাতাল হবে পাহাড়ে আর গ্রামগঞ্জে। ভুল চিকিৎসায় ভুল ব্যবস্থাপনায় জবাবদিহি করতে হবে কর্তৃপক্ষকে। খুলে রাখা রাস্তা কাজ শেষে মেরামত করতে হবে। দুর্নীতিবাজদের, অবৈধ অর্থ পাচারকারীদের আইনের আওতায় আনা হবে।</div><div>নির্বাচনে শুধু নেতা নয়, দল নয়, আমারও জিততে হবে। আমার চাওয়া গুলো পূরণ হলেই জনতার বিজয় হবে।</div><div>আমিও জিততে চাই। কারণ আমার জয়েই আপনার আসল বিজয়।</div>");

	const handleEditorChange = (e) => {
		setHtml(e.target.value);
	}

	return (
		<section className='blue-bg-img relative pb-10' id="makePost">
			<div className='container mx-auto px-4'>
				<div className='text-center'>
					<div className='mx-auto w-[320px] md:w-[350px]'>
						<div className='font-Kalpurush-bold yellowBg rounded-br-[22px] rounded-bl-[22px] text-5xl py-5 px-6 border-2 text-blue-dark '>লিখুন</div>
					</div>
				</div>
				
				<form onSubmit={handlePostCreation} className="mt-16">

					<div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">স্লোগান নির্বাচিত করুন</span></label>						

						<select name="topicsid" className="select select-bordered w-full">
							{
								allTopics.map( (allTopic) =><option key={allTopic.id} value={allTopic.id}>{allTopic.title}</option> )
							}
						</select>

					</div>

					{/* <div className="form-control">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">আপনার বক্তব্যের টাইটেল লিখুন</span></label>
						<input name='name' type="text" placeholder="চাকরির নিশ্চয়তা চাই" className="input input-bordered" required />
					</div> */}

					<div className="form-control mt-4">
						<label className="label"><span className="label-text font-Kalpurush-bold text-white text-xl">আপনার বক্তব্য লিখুন</span></label>
						<EditorProvider>
							<Editor value={html} placeholder="Test 2" onChange={handleEditorChange}>
								<Toolbar>
									<BtnUndo />
									<BtnRedo />
									<BtnBold />
									<BtnItalic />
								</Toolbar>
							</Editor>
						</EditorProvider>
					</div>

					<div className='flex w-full md:w-auto justify-center mt-10'>
						<button className="btn bg-white text-3xl text-[#EA2027] font-Kalpurush-bold font-bold"><FaCircleArrowUp /> পোস্ট করুন</button>
					</div>

				</form>	
				

				<div className='whiteBox mt-16 text-2xl rounded-3xl font-bold p-10 mx-4 md:mx-0 hidden'>
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

				<div className='flex items-center flex-wrap gap-8 mt-8 pb-24 hidden'>
					<div className='flex w-full md:w-auto justify-center'>
						<ul className='flex gap-8'>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaFacebookF /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaInstagram /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaTwitter /></a></li>
							<li className='bg-black p-4 rounded-full'><a href='' className='text-2xl text-white bg-black rounded-full share-link-style'><FaWhatsapp /></a></li> 
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WritePostSection