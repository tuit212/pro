import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './Experience.scss'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>SCSS</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
            <article className="experience__detals">
              <BsFillPatchCheckFill className='experience__detals-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light' >Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience