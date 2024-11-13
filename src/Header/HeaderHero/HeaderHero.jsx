import React from 'react'
import './HeaderHero.css'
import i18n from '../../i18n'

export default function HeaderHero() {

    const changeLng = (lng) => {
        return () => {
            i18n.changeLanguage(lng)
        }
    }
    return (

        <div className='headerHero hero'>
            <div className="container hero__general">
                <div className="hero__btnBox">
                    <button
                        onClick={changeLng('en')}
                        className="hero__btn"
                    >
                        Eng
                    </button>
                    <button
                        onClick={changeLng('uz')}
                        className="hero__btn"
                    >
                        Uz
                    </button>
                    <button
                        onClick={changeLng('ru')}
                        className="hero__btn"
                    >
                        Ru
                    </button>
                </div>
                <ul className='hero__list'>

                    <li className="hero__item">
                        <i class="fa-solid fa-envelope"></i>
                        <a href="mailto:sales@climattrading.ru">sales@climattrading.ru</a>
                    </li>
                    <li className="hero__item">
                        <i class="fa-solid fa-clock"></i>
                        <span>24/7</span>
                    </li>

                    <div className="hero__iconBox">
                        <a
                            href="https://www.vk.com/"
                            className="hero__iconLinks"
                        >
                            <i class="fa-brands fa-vk"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            className="hero__iconLinks"
                        >
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            className="hero__iconLinks"
                        >
                            <i class="fa-brands fa-youtube"></i>
                        </a>
                    </div>

                </ul>
            </div>
        </div>
    )
}
