import React from "react";
import { useTranslation } from "react-i18next"; 
import Page1Main__section2Img1 from './Page1Main__section2Imgs/Page1Main__section2Img2.png'
import Page1Main__section2Img3 from './Page1Main__section2Imgs/Page1Main__section2Img3.png'
import './Page1Main__section2.css'

function Page1Main__section2() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="section2__bg">
                <div className="section2__general">
                    <img src={Page1Main__section2Img1} alt="" />
                    <div className="section2__text">
                        <h2>{t("mainSection2__title1")}</h2>
                        <p>{t("mainSection2__title2")}</p>
                        <button>{t("mainSection2__button")}</button>
                    </div>
                </div>
            </div>
            <img src={Page1Main__section2Img3} className="section2__map"/>
        </section>
    );
}

export default Page1Main__section2;
