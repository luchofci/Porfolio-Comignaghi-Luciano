
import './User.css'


const User = () => {
    return (
        <section id='home' className='user-container'>
            <div className='user-content'>
                <h2>Building Digital Experiences That inspire</h2>
                <p>
                    Passionate Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>
            <div className="user-img">
                <div className='tech-icon'>
                    <img srcSet="/src/assets/images/Luciano.jpeg" alt="userImage" />
                </div>
            </div>
        </section>
    )
}

export default User