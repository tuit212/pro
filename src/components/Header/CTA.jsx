import React from 'react'
import CV from '../../Assets/img/cv.pdf'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
        <Link to={CV} download className='btn'>
            Download CV
        </Link>
        <Link to='#contact' className='btn btn-primary '>
            Let's Talk
        </Link>
    </div>
  )
}

export default CTA