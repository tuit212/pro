import React from 'react' 
import { Link } from 'react-router-dom'
import IMG from '../../Assets/img/portfolio1.jpg'
import IMG1 from '../../Assets/img/portfolio2.jpg'
import IMG2 from '../../Assets/img/portfolio3.jpg'
import IMG3 from '../../Assets/img/portfolio4.jpg'
import IMG4 from '../../Assets/img/portfolio5.png'
import IMG5 from '../../Assets/img/portfolio6.jpg'
import './Portfolio.scss'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <div className="cta">
            <Link to='https://github.com/' className='btn' >Githup</Link>
            <Link to='https://dribbble.com/' className='btn btn-primary' >
              Live Demo 
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio