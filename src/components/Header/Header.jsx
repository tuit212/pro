import React from 'react' 
import CTA from './CTA'
import { Link } from 'react-router-dom'
import ME from '../../Assets/img/me.png'
import './Header.scss'
import HScroll from './HScroll'

const Header = () => {
  return (
    <header id='top'>
      <div className="container header__container">
        <h5>Hello , I'm</h5>
        <h1>Anvarov Asadbek</h1>
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