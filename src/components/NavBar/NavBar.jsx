import { useState } from 'react';
import './NavBar.css';
import MobileNav from './MobileNav/MobileNav';

export const NavBar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            
			<nav className="nav-wrapper">
				<div className="nav-content"> 
					<a href="/" style={{ textDecoration: 'none', color: 'whitesmoke' }}>Luciano Comignaghi <br />
				Full Stack Dev.</a>
				
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

						<button className="contact-btn" onClick={() => {}}>
							Hire Me
						</button>
					</ul>

					<button className="menu-btn" onClick={toggleMenu}>
						<span
							className={'material-symbols-outlined'}
							style={{ fontSize: '1.8rem' }}
						>
							{openMenu ? 'X' : 'Menu'}
						</span>
					</button>
				</div>
			</nav>
		</>
	);
};

