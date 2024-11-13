import React from 'react'
import '../About/About.css'
import './Contact.css'
import contactMapImg from '../../assets/img/contactMapImg.png'
import ContacForm from './ContacForm/ContacForm'

export default function Contact({ t }) {
    return (
        <section className='contact'>
            <div className="container">
                <li className="about__spanItem">
                    <span className="about__span">
                        {t("aboutSpan1")}
                    </span>
                    <span className="about__span">
                        {t("aboutSpan2")}
                    </span>
                </li>

                <h2 className="contact__title">
                    {t("contactTitle")}
                    <hr style={{ borderBottom: "2px solid #FFA825" }} />
                </h2>
                <div className="contact__general">

                        <div className='contact__boxes'>
                            <ul className="contact__list">
                                <li className='contact__items'>
                                    <i class="fa-solid fa-phone"></i>
                                    <a
                                        className='contact__link'
                                        href="tel:+7 (499) 347-25-62"
                                    >
                                        +7 (499) 347-25-62
                                    </a>
                                </li>
                                <li className='contact__items'>
                                    <i class="fa-solid fa-phone"></i>
                                    <a
                                        className='contact__link'
                                        href="tel:+7 (926) 008-81-46"
                                    >
                                        +7 (926) 008-81-46
                                    </a>
                                </li>
                                <li className='contact__items'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <a
                                        href="mailto:sales@climattrading.ru"
                                        className='contact__link'
                                    >
                                        sales@climattrading.ru
                                    </a>
                                </li>
                                <li className="contact__items">
                                    <i class="fa-solid fa-clock"></i>
                                    <span>24/7</span>
                                </li>
                            </ul>
                            <ContacForm t={t} />
                        </div>
                        <img
                            src={contactMapImg}
                            className='contact__mapImg'
                            alt=""
                        />

                </div>
            </div>
        </section>
    )
}
