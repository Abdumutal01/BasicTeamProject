import React from 'react'
import './About.css'
import UseDouble from '../Page1/Page1Main/Page1Main__section4/UseDouble/UseDouble'

export default function About({ t }) {
    return (
        <section className='about'>
            <div className="container">
                <li className="about__spanItem">
                    <span className="about__span">
                        {t("aboutSpan1")}
                    </span>
                    <span className="about__span">
                        {t("aboutSpan2")}
                    </span>
                </li>

                <div className="about__general">
                    <h2 className="about__title">
                        {t("aboutTitle1")}
                    </h2>
                    <p className="about__text">
                        {t("aboutText1")}
                    </p>
                    <h2 className="about__title">
                        {t("aboutTitle2")}
                        <span style={{ border: " 2px solid #FFA825" }} />
                    </h2>
                    <p className="about__text">
                        {t("aboutText2")}
                    </p>

                    <h2 className="about__title">
                        {t("aboutTitle3")}
                        <span style={{ border: " 2px solid #FFA825" }} />
                    </h2>

                    <UseDouble t={t} />
                </div>
            </div>
        </section>
    )
}
