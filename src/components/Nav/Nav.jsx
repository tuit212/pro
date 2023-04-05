import React from 'react'
import { AiOutlineHome , AiOutlineUser } from 'react-icons/ai'
import { BiBook , BiMessageSquareDetail} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'
import './Nav.scss'

const Nav = () => {
  const [active , setActive] = useState('#top');
  return (
    <nav>
      <a href="#top" 
        onClick={() => setActive('#top')}
        className={active === '#top' ? 'active' : ''}>
        <AiOutlineHome/>
      </a>
      <a href="#about" 
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
        >
        <AiOutlineUser/>
      </a>
      <a href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}>
        <BiBook/>
      </a>
      <a href="#services"
        onClick={() => setActive('#services')}
        className={active === '#services' ? 'active' : ''}>
        <RiServiceLine/>
      </a>
      <a href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail/>
      </a>
    </nav>
  )
}

export default Nav