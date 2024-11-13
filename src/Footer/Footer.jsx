import React from 'react'
import './Footer.css'

import footerLogo from '../assets/img/headerLogo.png'
import { NavLink } from 'react-router-dom'

export default function Footer({ t }) {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__hero">
                    <div className='footer__box'>
                        <img
                            src={footerLogo}
                            alt=""
                            className="footer__logoImg"
                        />
                        <p className='footer__text'>
                            {t("footerText1")}
                        </p>
                    </div>

                    <ul className='footer__list'>
                        <li className='footer__iconItems'>
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:+7 (499) 347-25-62">
                                +7 (499) 347-25-62
                            </a>
                        </li>
                        <li className='footer__iconItems'>
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:+7 (499) 347-25-62">
                                +7 (499) 347-25-62
                            </a>
                        </li>
                    </ul>
                    <button className='footer__btn'>
                        {t("footerBtn")}
                    </button>
                </div>

                <ul className='footer__list'>
                    <li className='footer__iconItems'>
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:sales@climattrading.ru">
                            sales@climattrading.ru
                        </a>
                    </li>
                    <li className='footer__iconItems'>
                        <i class="fa-solid fa-clock"></i>
                        24/7
                    </li>
                </ul>
                {/* footer__list */}

                <div className="nav__box footer__list">
                    <NavLink className="nav__link">
                        {t('headerLink1')}
                    </NavLink>
                    <NavLink className="nav__link">
                        {t('headerLink2')}
                    </NavLink>
                    <NavLink className="nav__link">
                        {t('headerLink3')}
                    </NavLink>
                    <NavLink className="nav__link">
                        {t('headerLink4')}
                    </NavLink>
                    <NavLink className="nav__link">
                        {t('headerLink5')}
                    </NavLink>
                    <NavLink className="nav__link">
                        {t('headerLink6')}
                    </NavLink>

                </div>

                <p className="footer__textEnd">
                    {t("footerText2")}
                </p>
            </div>
        </footer>
    )
}
