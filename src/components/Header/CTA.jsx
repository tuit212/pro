import React from 'react'
import CV from '../../Assets/img/cv.pdf'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>
            Download CV
        </a>
        <Link to='#contact' className='btn btn-primary '>
            Let's Talk
        </Link>
    </div>
  )
}

export default CTA