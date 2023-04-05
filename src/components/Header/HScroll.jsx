import React from 'react'
import { BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const HScroll = () => {
  return (
    <div className='header__scroll'>
        <Link to='https://www.instagram.com/' target='_blank'>
            <BsLinkedin/>
        </Link>
        <Link to='https://www.linkedin.com/' target='_blank'>
            <BsInstagram/>
        </Link>
        <Link to='https://github.com/' target='_blank'>
            <BsGithub/>
        </Link>
    </div>
  )
}

export default HScroll