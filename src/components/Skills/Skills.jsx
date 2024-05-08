import './Skills.css';

import { useState } from 'react';
import { SKILLS } from '../../utils/data';
import { SkillCard } from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
	const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

	const handleSelectSkills = (data) => {
		setSelectedSkill(data);
	};

	return (
		<>
			<section id="skills" className="skills-container">
				<h1  className="section-title">Technical Skills</h1>

				<div className="skills-content">
					{/* <div className="skills-div"> */}
						<div className="skills">
							{SKILLS.map((item) => (
								<SkillCard
									key={item.title}
									iconUrl={item.icon}
									title={item.title}
									isActive={
										selectedSkill.title === item.title
									}
									onClick={() => {
										handleSelectSkills(item);
									}}
								/>
							))}
						</div>
						<div className="skills-info">
							<SkillsInfoCard
								heading={selectedSkill.title}
								skills={selectedSkill.skills}
							/>
						</div>
					{/* </div> */}
				</div>
			</section>
		</>
	);
};

export default Skills;
