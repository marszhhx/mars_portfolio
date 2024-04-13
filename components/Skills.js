import uniqid from 'uniqid'
import { iconSkills } from '../data/portfolio'

const Skills = () => {
  if (!iconSkills.length) return null

  return (
    <section
      className='section skills animate__animated animate__fadeIn animate__delay-2s'
      id='skills'
    >
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {iconSkills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
