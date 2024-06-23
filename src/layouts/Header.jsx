
import { Link } from "react-router-dom";
import logo from "../assets/Ami-O-Jitte-cai-logo.webp";
import DILOGO from "../assets/democracy-nternation-logo.png";
import USAIDLOGO from "../assets/us-aid-english.png";
import { FaBars } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const links = [{id: 1, to: '/', title: 'আমাদের কথা'}, {id: 2, to: '/signin', title: 'আপনার দাবি'}, {id: 3, to: '/contact', title: 'যোগাযোগ'}]
const navLinks = links.map(navLink => <li className="hidden md:block" key={navLink.id}><Link  to={navLink.to} className="text-white rounded-md border-2 border-white md:px-4 md:py-4 lg:px-8 lg:py-4 md:text-md lg:text-xl font-Kalpurush-bold">{navLink.title}</Link></li>)
const mobileNavLinks = links.map(navLink => <li className="block md:hidden" key={navLink.id}><Link to={navLink.to} className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-xs md:text-md block font-Kalpurush-bold">{navLink.title}</Link></li>)

const Header = () => {

	const [isVisible, setIsVisible] = useState(false);
	
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

    return (
		<>
			<section className="bg-white md:bg-primaryColor pl-2 pr-2">
				<header className="container flex mx-auto justify-between items-center py-4 relative flex-wrap flex-md-nowrap">
					<div className="flex justify-between items-end w-full md:w-auto">
						<div className="block md:hidden">
							<img src={ USAIDLOGO } alt="Ami o Jitte Chai logo" className="w-[100px] sm:w-[150px] md:w-[200px]" />
						</div>
						<Link to="/" className="inline-block">
							<img src={ logo } alt="Ami o Jitte Chai logo" className="w-[100px] sm:w-[150px] md:w-[200px]" />
						</Link>
						<div className="block md:hidden">
							<img src={ DILOGO } alt="Ami o Jitte Chai logo" className="w-[100px] sm:w-[150px] md:w-[200px]" />
						</div>
					</div>
					<nav className="hidden md:block">
						<ul className="font-Kongshomj-bold flex gap-8 items-center">
							{navLinks}
							<li className="relative z-10">
								<FaBars onClick={toggleVisibility} className="text-white text-6xl cursor-pointer"></FaBars>
								{isVisible && (
									<div className="hidden-div absolute top-[70px] p-[18px] left-[-190px] w-[250px] border-2 border-white bg-primaryColor rounded-md">
										<ul>
											{/* mobileNavLinks */}
											<li>											
												<Link className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-md block mb-4 font-Kalpurush-bold" to="/login">লগইন</Link>
											</li>
											<li>
												<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block font-Kalpurush-bold" to="/register">সাইন আপ</Link>
											</li>
										</ul>
									</div>
								)}
							</li>
						</ul>
					</nav>
				</header>
			</section>
			<section className="relative z-10 block md:hidden w-full hero-mobile-nav">
				<nav className="container flex mx-auto justify-between items-center py-4 relative flex-wrap flex-md-nowrap">
					<ul className="font-Kongshomj-bold flex gap-2 md:gap-8 items-center justify-between w-full">
						{mobileNavLinks}
						<li className="relative z-10">
							<FaBars onClick={toggleVisibility} className="text-white text-5xl cursor-pointer"></FaBars>
							{isVisible && (
								<div className="hidden-div absolute top-[70px] p-[18px] left-[-190px] w-[250px] border-2 border-white bg-primaryColor rounded-md">
									<ul>											
										<li>											
											<Link className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-md block mb-4 font-Kalpurush-bold" to="/login">লগইন</Link>
										</li>										
										<li>											
											<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block font-Kalpurush-bold" to="/register">সাইন আপ</Link>
										</li>
									</ul>
								</div>
							)}
						</li>
					</ul>
				</nav>
			</section>
		</>
    )
    
}

export default Header