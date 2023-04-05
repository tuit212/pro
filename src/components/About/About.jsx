import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import ME from '../../Assets/img/me-about.jpg'
import './About.scss'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="img" />
          </div>
        </div>

        <div className="about__context">
          <div className="about__cards">

            <article className="about__cart">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ months working</small>
            </article>

            <article className="about__cart">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className="about__cart">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6+ Complete</small>
            </article>

          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, culpa. Nemo tempora quam repellat repellendus aspernatur blanditiis commodi sit beatae reiciendis tempore nihil molestiae maxime autem, hic labore neque voluptas?
          </p>

          <Link to='#contact' className='btn btn-primary' >
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About