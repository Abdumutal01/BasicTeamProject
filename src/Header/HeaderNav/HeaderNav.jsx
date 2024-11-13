import React from 'react'
import './HeaderNav.css'

import headerLogo from '../../assets/img/headerLogo.png'
import { NavLink } from 'react-router-dom'

export default function HeaderNav({ t }) {



  return (
    <nav className='headerNav nav'>
      <div className='nav__boxes'>
        <img
          src={headerLogo}
          alt="Logo"
          className="nav__logoImg"
        />

        <ul className="nav__list">
          <i class="fa-solid fa-headset"></i>
          <li className="nav__items">
            <a
              href="tel:++7 (499) 347-25-62"
              className='nav__telLink'
            >
              +7 (499) 347-25-62
            </a>
            <br />
            <a
              href="tel:++7 (926) 008-81-46"
              className='nav__telLink'
            >
              +7 (926) 008-81-46
            </a>
          </li>
        </ul>
      </div>

      <div className="nav__box">
        <NavLink
          to='/'
          className="nav__link"
        >
          {t('headerLink1')}
        </NavLink>
        <NavLink
          to='/page2'
          className="nav__link"
        >
          {t('headerLink2')}
        </NavLink>
        <NavLink
          to="/page3"
          className="nav__link"
        >
          {t('headerLink3')}
        </NavLink>
        <NavLink
          to="/page4"
          className="nav__link"
        >
          {t('headerLink4')}
        </NavLink>
        <NavLink
          to='/about'
          className="nav__link"
        >
          {t('headerLink5')}
        </NavLink>
        <NavLink
          to='/contact'
          className="nav__link"
        >
          {t('headerLink6')}
        </NavLink>
        <div className="nav__btnBox">
          <button className='nav__shopping'>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>1</span>
          </button>
          <button className='nav__btn'>
            {t("headerBtn")}
          </button>
        </div>
      </div>
    </nav>
  )
}
