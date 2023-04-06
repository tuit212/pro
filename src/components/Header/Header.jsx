import React from 'react' 
import CTA from './CTA'
import { Link } from 'react-router-dom'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import ME from '../../Assets/img/me.png'
import './Header.scss'
import HScroll from './HScroll'

const Header = () => {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer" , "Anvarov Asadbek" ], 

      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header id='top'>
      <div className="container header__container">
        <h5>Hello , I'm</h5>
        <span className='title' ref={el}></span>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA/>
        <HScroll/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <Link to='#contact' className='scroll__down'>
          Scroll Down
        </Link>
      </div>
    </header>
  )
}

export default Header