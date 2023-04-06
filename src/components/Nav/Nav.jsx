import React from 'react'
import { AiOutlineHome , AiOutlineUser } from 'react-icons/ai'
import { BiBook , BiMessageSquareDetail} from 'react-icons/bi'
import { BsCreditCard2BackFill } from 'react-icons/bs'
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
      <a href="#portfolio"
        onClick={() => setActive('#portfolio')}
        className={active === '#portfolio' ? 'active' : ''}>
        <BsCreditCard2BackFill/>
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