
import { Link } from "react-router-dom";
import logo from "../assets/Ami-O-Jitte-cai-logo.webp";
import DILOGO from "../assets/democracy-nternation-logo.png";
import USAIDLOGO from "../assets/us-aid-english.png";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

	const { isLoggedIn , logOut } = useContext(AuthContext);
	const token = localStorage.getItem('token');
	console.log(isLoggedIn);

	const [isVisible, setIsVisible] = useState(false);
	
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};

	const handleClickMenu = () => {
		setIsVisible(!isVisible);		
	}

	const onSubMenuLinkClick = (event) => {
		event.preventDefault();
	}
	  
	const handleLogOut = ()=>{
		logOut().then(ruselt=>{}).catch(error=>{ console.error(error) });
	}
	
	const links = [
		{ id: 1, to: '/about-us', title: 'আমাদের কথা' },
		{ id: 2, to: '/#', title: 'আপনার দাবি', hasChild: true, sublinks: [{ id: 1, to: '/all-posters', title: 'পোস্টার' }, { id: 2, to: '/all-videos', title: 'ভিডিও' }, { id: 3, to: '/all-posts', title: 'পোস্ট' }] },
		{ id: 3, to: '/contact', title: 'যোগাযোগ' }
	];
  
  const navLinks = links.map((navLink) => (
	<li className={`hidden md:block ${navLink.hasChild ? 'hasSubMenu' : ''}`} key={navLink.id}>
	  <Link to={navLink.to} className="text-white rounded-md border-2 border-white md:px-4 md:py-4 lg:px-8 lg:py-4 md:text-md lg:text-xl font-Kalpurush-bold" onClick={navLink.hasChild ? onSubMenuLinkClick : undefined}>{navLink.title}</Link>
	  {navLink.hasChild && (
		<ul className="block">
		  {navLink.sublinks.map((sublink) => (
			<li className="" key={sublink.id}>
			  <Link to={sublink.to} className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-normal md:text-md block font-Kalpurush-bold">{sublink.title}</Link>
			</li>
		  ))}
		</ul>
	  )}
	</li>
  ));
  
  const mobileNavLinks = links.map((navLink) => (
	<li className={`block md:hidden ${navLink.hasChild ? 'hasSubMenu' : ''}`} key={navLink.id}>
	  <Link to={navLink.to} className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-xs md:text-md block font-Kalpurush-bold" onClick={navLink.hasChild ? onSubMenuLinkClick : undefined}>{navLink.title}</Link>
	  {navLink.hasChild && (
		<ul className="block">
		  {navLink.sublinks.map((sublink) => (
			<li className="" key={sublink.id}>
			  <Link to={sublink.to} className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-normal md:text-md block font-Kalpurush-bold">{sublink.title}</Link>
			</li>
		  ))}
		</ul>
	  )}
	</li>
  ));

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
											{isLoggedIn ? (
												<>
													<li>
														<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block mb-4 font-Kalpurush-bold" to="/register" onClick="handleClickMenu()">সাইন আপ</Link>
													</li>
													<li>
														<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block font-Kalpurush-bold" onClick={handleLogOut}>লগ আউট</Link>
													</li>
												</>
											) : (
												<>
													<li>
														<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block mb-4 font-Kalpurush-bold" to="/register" onClick="handleClickMenu()">সাইন আপ</Link>
													</li>
													<li>
														<Link className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-md block font-Kalpurush-bold" to="/login" onClick="handleClickMenu()">লগইন</Link>
													</li>
												</>
											)}
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
											<Link className="text-white rounded-md border-2 border-white px-2 py-2 text-center text-md block mb-4 font-Kalpurush-bold" to="/login" onClick="handleClickMenu()">লগইন</Link>
										</li>										
										<li>											
											<Link className="text-white rounded-md border-2 border-white px-3 py-2 text-center text-md block font-Kalpurush-bold" to="/register" onClick="handleClickMenu()">সাইন আপ</Link>
										</li>
										{isLoggedIn}
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