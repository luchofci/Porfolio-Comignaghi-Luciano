import './Project.css';
const TabuOdin = import.meta.env.VITE_PUBLIC_URL + '/images/Logo-Nav.png';

const Project = () => {
	return (
		<>
			<div id="projects" className="porfolio">
				<h1 className="section-title">My work</h1>
				<div className="container">
					<div className="work-list">

						<div className="work">
							<img src={TabuOdin} alt="Tabu&Odin" />
							<div className="layer">
								<h3>
									PetShop Tabu&Odin <br /> App
								</h3>
								<p>
									Immerse yourself in an Fully-functional
									Ecommerce experience with our comprehensive
									platform. Enjoy seamless CRUD operations for
									effortless product management, secure login
									functionality for peace of mind, and a
									dynamic shopping cart system to streamline
									your purchasing journey.
								</p>
								<a href="https://github.com/luchofci" target='blank'>
									<i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
								</a>
							</div>
						</div>

						{/* <div className="work">
							<img
								src={'../../../public/images/Foto.png'}
								alt="Foto1"
							/>
							<div className="layer">
								<h3>
									Porfolio <br /> App
								</h3>
								<p>
									Immerse yourself in an Fully-functional
									Ecommerce experience with our comprehensive
									platform. Enjoy seamless CRUD operations for
									effortless product management, secure login
									functionality for peace of mind, and a
									dynamic shopping cart system to streamline
									your purchasing journey.
								</p>
								<a
									href="https://luciano-comignaghi-porfolio.netlify.app/"
									target="blank"
								>
									<i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
								</a>
							</div>
						</div> */}
						
					</div>
					<a href="" className="btn">
						See more
					</a>
				</div>
			</div>
		</>
	);
};

export default Project;
