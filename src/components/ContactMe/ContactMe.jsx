import './ContactMe.css'

const Cv = '../../../public/images/Luciano Comignaghi CV.pdf'
const Resume = '../../../public/images/Luciano Comignaghi Resume.pdf'


const ContactMe = () => {
    return (

        <>
        <div className="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <p><i className="fa-solid fa-paper-plane"></i>lucianofederico.dev@gmail.com</p>
                        <p><i className="fa-solid fa-square-phone"></i> +54.9.11.6.595.0838</p>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/luchofci" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://github.com/luchofci" target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/luciano-federico-comignaghi-iglesias-9a8248205/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                        <a  href="../../../public/images/Luciano Comignaghi CV.pdf" download={Cv} className='btn btn2'>Download CV (ES)</a>
                        <a href="../../../public/images/Luciano Comignaghi Resume.pdf" download={Resume} className='btn btn2'>Download Resume (EN)</a>
                    </div>
                    <div className="contact-right">
                        <form action="">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="Message" id="" cols="30" rows="6" placeholder="Your Message" required></textarea>    
                            <button type="submit" className='btn btn2'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        </>
    )
}

export default ContactMe