import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <nav className='nav-wrapper'>
                <div className="nav-content">
                    <img className="logo" src="" alt="logo"  />
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
                        
                        <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
                    </ul>
                </div>
            </nav>
        </>
    )
}

// export default NavBar