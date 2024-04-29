import { SKILLS } from '../../utils/data'
import { SkillCard } from './SkillCard/SkillCard'
import './Skills.css'



const Skills = () => {
  return (
    <>

    <section className="skills-container">
      <h5>Technical Skills</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item)=>(
            <SkillCard 
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
            />
          ))}
        </div>
        <div className="skills-info"></div>
      </div>
    </section>
    </>
  )
}

export default Skills