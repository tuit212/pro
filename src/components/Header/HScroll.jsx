import React from 'react'
import { BsLinkedin , BsInstagram , BsGithub} from 'react-icons/bs'


const HScroll = () => {
  return (
    <div className='header__scroll'>
        <a href="https://www.instagram.com/">
            <BsLinkedin/>
        </a>
        <a href="https://www.linkedin.com/">
            <BsInstagram/>
        </a>
        <a href="https://github.com/" >
            <BsGithub/>
        </a>
    </div>
  )
}

export default HScroll