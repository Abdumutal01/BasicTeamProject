import React from "react";
import { useTranslation } from "react-i18next"; 
import './Page1Main__section3.css'
import section3__img1 from './Page1Main__section3Imgs/Page1Main__section3Img2.png'

function Page1Main__section3() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="section3__bg">
                <div className="section3__general">
                    <div className="section3__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("mainSection3Box1__title")}</h3>
                    </div>
                    <div className="section3__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("mainSection3Box1__title")}</h3>
                    </div>
                    <div className="section3__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("mainSection3Box1__title")}</h3>
                    </div>
                    <div className="section3__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("mainSection3Box1__title")}</h3>
                    </div>
                    <div className="section3__box">
                        <img src={section3__img1} alt="" />
                        <h3>{t("mainSection3Box1__title")}</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page1Main__section3;
