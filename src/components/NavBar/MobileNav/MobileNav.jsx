import './MobileNav.css';

const Resume =
	import.meta.env.VITE_PUBLIC_URL + '/images/Luciano Comignaghi Resume.pdf';

const MobileNav = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div
				className={`mobile-menu ${isOpen ? 'active' : ''}`}
				onClick={toggleMenu}
			>
				<div className="mobile-menu-container">
					<div className="mobile-nav-title">
						<h1>
							<p className="mobile-nav-title-p">
								Luciano Comignaghi Full Stack Dev.
							</p>
						</h1>
					</div>
					{/* <img
						className="logo"
						src="../../../../public/images/Foto.png"
						alt="logo"
					/> */}
					<ul>
						<li>
							<a href="#home" className="menu-item menu-navbar">
								Home
							</a>
						</li>
						<li>
							<a href="#skills" className="menu-item menu-navbar">
								Skills
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="menu-item menu-navbar"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#contactMe"
								className="menu-item menu-navbar"
							>
								Contact Me
							</a>
						</li>
						<a
							href={Resume}
							download="LucianoComignaghiResume.pdf"
							className="contact-btn-mobile"
						>
							Download Resume
						</a>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MobileNav;
