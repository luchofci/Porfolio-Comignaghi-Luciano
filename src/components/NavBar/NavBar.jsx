import { useState } from 'react';
import './NavBar.css';
import MobileNav from './MobileNav/MobileNav';

// const Resume = '../../../public/images/Luciano Comignaghi Resume.pdf';

export const NavBar = () => {

	const Resume = import.meta.env.REACT_APP_PUBLIC_URL + '/images/Luciano Comignaghi Resume.pdf'


	const [openMenu, setOpenMenu] = useState(false);
	
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>
			<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

			<nav className="nav-wrapper">
				<div className="nav-content">
					<div
						className="logo-wrapper"
						href="/"
						style={{
							textDecoration: 'none',
							color: 'whitesmoke',
						}}
					>
						<i
							style={{ color: '#ff004f' }}
							className="fa-solid fa-code"
						></i>{' '}
						<h1>
							Luciano Comignaghi <br />
							Full Stack Dev.{' '}
						</h1>
						<i
							style={{ color: '#ff004f' }}
							className="fa-solid fa-code"
						></i>
					</div>

					{/* <img className="logo" src={'../../../public/images/back/back-end (2).png'} alt="logo" style={ {'color': "white"}}/>/ */}
					<ul>
						<li>
							<a href="#home" className="menu-item">
								Home
							</a>
						</li>
						<li>
							<a href="#skills" className="menu-item">
								Skills
							</a>
						</li>
						<li>
							<a href="#projects" className="menu-item">
								Projects
							</a>
						</li>
						<li>
							<a href="#contactMe" className="menu-item">
								Contact Me
							</a>
						</li>
						<a
							href={Resume}
							download={Resume}
							className="contact-btn-mobile"
						>
							Download Resume
						</a>
					</ul>
					<button className="menu-btn" onClick={toggleMenu}>
						<span
							className={'material-symbols-outlined'}
							style={{ fontSize: '1.8rem' }}
						>
							{openMenu ? (
								'X'
							) : (
								<i className="fa-solid fa-bars"></i>
							)}
						</span>
					</button>
				</div>
			</nav>
		</>
	);
};
