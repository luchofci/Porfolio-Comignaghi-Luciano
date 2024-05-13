import './globalStyles.css';

import { NavBar } from './components/NavBar/NavBar';
import Project from './components/Projects/Project';
import Skills from './components/Skills/Skills';
import User from './components/User/User';
import CopyRigth from './components/Footer/CopyRigth/CopyRigth';
import ContactMe from './components/ContactMe/ContactMe';


function App() {
	return (
		<>
			<NavBar />
			<User />
			<Skills />
			<Project />
			<ContactMe />
			<CopyRigth />
		</>
	);
}
export default App;
