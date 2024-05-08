import './Project.css';
// import FotoTools from './../assets/images/Foto.png'

const Project = () => {
	return (
		<>
			<div id='projects' className="porfolio">
				<h1 className="section-title">My work</h1>
				<div className="container">
					<div className="work-list">
						<div className="work">
							<img
								src={'../../../public/images/Foto.png'}
								alt="Foto1"
							/>
							<div className="layer">
								<h3>Social Media App</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Neque magnam officiis quos
									deserunt, ratione autem iusto eos adipisci
									sunt inventore, quis explicabo
									exercitationem temporibus, reiciendis error!
									Eos quis quas magni.
								</p>
								<a href="#">
									<i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
								</a>
							</div>
						</div>

						<div className="work">
							<img
								src={'../../../public/images/Foto.png'}
								alt="Foto2"
							/>
							<div className="layer">
								<h3>Social Media App</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Neque magnam officiis quos
									deserunt, ratione autem iusto eos adipisci
									sunt inventore, quis explicabo
									exercitationem temporibus, reiciendis error!
									Eos quis quas magni.
								</p>
								<a href="#">
									<i className="fa-solid fa-arrow-up-right-from-square"></i>{' '}
								</a>
							</div>
						</div>

						<div className="work">
							<img
								src={'../../../public/images/Foto.png'}
								alt="Foto3"
							/>
							<div className="layer">
								<h3>social Media App</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Neque magnam officiis quos
									deserunt, ratione autem iusto eos adipisci
									sunt inventore, quis explicabo
									exercitationem temporibus, reiciendis error!
									Eos quis quas magni.
								</p>
								<a href="#">
									<i className="fa-solid fa-arrow-up-right-from-square"></i>
								</a>
							</div>
						</div>
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
