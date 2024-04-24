import './MobileNav.css'



const MobileNav = ({ isOpen, toggleMenu}) => {
	return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>

                <div className='mobile-menu-container'>
                    <img className='logo' src="" alt="logo" />
                    <ul>
                        <li>
                            <a href="" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Contact Me</a>
                        </li>

                        <button className='contact-btn' onClick={()=>{}}>
                            Hire me
                        </button>
                    </ul>
                </div>
            </div>
    
    
    
        </>
    )
};

export default MobileNav;
