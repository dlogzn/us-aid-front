import React, { useEffect, useState } from 'react'
import BlogPostBtn from '../assets/blog-post-button.png';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Swal from 'sweetalert2';
import { FaCircleArrowUp } from "react-icons/fa6";
import axios from 'axios';
import PostCard from './PostCard';
import ReadyPost from './ReadyPost';
import { 
	BtnBold, 
	BtnRedo,
	BtnUndo,
	BtnItalic, 
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

	const [homePagePosts, sethomePagePosts] = useState([]);
	const [reloadSixPost , setReloadSixPost] = useState(false);	

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
  
	} , [reloadSixPost]);

	const [postData, setPostData] = useState(null);
	const handlePostCreation = async (e) => {

		e.preventDefault();
		
		const topicsid = e.target.topicsid.value;
		const content = html;
		console.log(topicsid, content);

		const token = localStorage.getItem('token');

		try {

		// Create a new post
		
		// Open API for Test
		//const response = await axios.post('https://businessautomata.com/us-aid-api/api/create/post', 
		
		const userData = {
			topic_id: topicsid,
			title: 'আমিও জিততে চাই',
			content: content
		};
		const headers = {
			'Authorization': `Bearer ${token}`,
			'Accept': 'application/json'
		};
		axios.post("https://businessautomata.com/us-aid-api/api/member/posts", userData, {headers: headers})
			.then((response) => {
				console.log('Inserted Post:', response.status, response.data);
				if (response.data.payload.id) {
					Swal.fire({
						title: 'সফল!',
						text: 'পোস্ট সফল হয়েছে',
						icon: 'success',
						confirmButtonText: 'Cool',
					});

					try {
					const id = response.data.payload.deterrent;

					// Getting the latest post
					axios.get(`https://businessautomata.com/us-aid-api/api/get/post?deterrent=${id}`, {headers: headers})
						.then((res) => {
							console.log( 'get latestest post:', res.status, res.data);							
							if (res.data.payload.id) {
								setReloadSixPost(true);
								setPostData(res.data.payload);
							}
						});

					} catch (error) {
						console.error('Error:', error);
					}
				}
		});

		} catch (error) {
			console.error('Error:', error);
		}
	};


	const [html, setHtml] = useState("<div>জিততে চায় সবাই। জিততে চায় নেতা, জিততে চায় রাজনৈতিক দল। কিন্তু আমার জেতার কথা বলে কয় জন?</div><div>আমি চাই, নাগরিক দাবির কথায় কেউ মুখ চেপে ধরবে না। আগে বাড়ি ফিরতে হবে না। নিরাপদে আমি চলাফেরা করতে পারব যখন তখন। আদিবাসী বলে আমার উপরে চালানো হবে না আক্রমণ। ধর্মীয় সংখ্যালঘু বলে আমার বাসা বাড়ি প্রার্থনা ঘর ভেঙে দেওয়া হবে না। ক্ষমতাধরদের কাছে আইন-শৃঙ্খলা বাহিনী জিম্মি হয়ে থাকবে না। সিন্ডিকেট করে নিত্য প্রয়োজনীয় জিনিসের দাম ইচ্ছামতন বাড়ানো হবে না। ঘন্টার পর ঘন্টা যানজটে আটকে থাকতে হবে না। লোডশেডিং কিংবা জলাবদ্ধতায় ব্যাহত হবেনা জনজীবন। আমি চাই, সকল স্বাস্থ্যসেবার সুবিধা সহ হাসপাতাল হবে পাহাড়ে আর গ্রামগঞ্জে। ভুল চিকিৎসায় ভুল ব্যবস্থাপনায় জবাবদিহি করতে হবে কর্তৃপক্ষকে। খুলে রাখা রাস্তা কাজ শেষে মেরামত করতে হবে। দুর্নীতিবাজদের, অবৈধ অর্থ পাচারকারীদের আইনের আওতায় আনা হবে।</div><div>নির্বাচনে শুধু নেতা নয়, দল নয়, আমারও জিততে হবে। আমার চাওয়া গুলো পূরণ হলেই জনতার বিজয় হবে।</div><div>আমিও জিততে চাই। কারণ আমার জয়েই আপনার আসল বিজয়।</div>");

	const handleEditorChange = (e) => {
		setHtml(e.target.value);
	}

	return (
		<>
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
							<button className="btn bg-white text-3xl text-[#EA2027] font-Kalpurush-bold font-bold"><FaCircleArrowUp /> পোস্ট তৈরি করুন</button>
						</div>

					</form>	

					{postData && <ReadyPost postData={postData}></ReadyPost>}

				</div>
			</section>
			<section className='dark-blue-bg relative px-4 md:px-0 py-24'>
				<div className='container mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{
							homePagePosts.map( (homePagePostsData, index) =><PostCard key={index} homePagePostsData={homePagePostsData}></PostCard> )
						}
					</div>
				</div>
			</section>
		</>
	)
}

export default WritePostSection