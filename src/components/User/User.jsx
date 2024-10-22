import './User.css';

const UserImage =
	import.meta.env.VITE_PUBLIC_URL + '/images/Luciano.jpeg';

const User = () => {
	return (
		<section id="home" className="user-container">
			<div className="user-content">
				<h1>Crafting Digital Pathways: Where Clean Code Sparks Creativity</h1>
				<p>
                Step into a world of innovation and digital craftsmanship. As a dedicated Full Stack Dev, I specialize in sculpting online experiences that captivate and inspire. Join me on this journey where ideas come to life in extraordinary digital realms.
				</p>
			</div>
			<div className="user-img">
				<div>
					<img srcSet={UserImage}
					alt="userImage" />
				</div>
			</div>
		</section>
	);
};

export default User;
