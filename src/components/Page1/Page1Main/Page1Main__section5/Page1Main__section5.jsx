import React from "react";
import { useTranslation } from "react-i18next";
import './Page1Main__section5.css'
import section5__img from './Page1Main__section5Imgs/Page1Main__section5Img2.png'

function Page1Main__section5() {
    const { t } = useTranslation();

    return (
        <section>
            <div className="section5__bg">
                <br />
                <h2
                    style={{ 
                        width: "800px", 
                        textTransform: "uppercase", 
                        margin:"0 auto"
                    }}
                >
                    {t("mainSection5__title1")}

                </h2>
                <br />
                <div className="section5__general">
                    <div className="section5__box">
                        <h3>{t("mainSection5Box__title1")}</h3>
                        <h4>{t("mainSection5Box__title2")}</h4>
                        <img src={section5__img} alt="" />
                    </div>
                    <div className="section5__box">
                        <h3>{t("mainSection5Box__title1")}</h3>
                        <h4>{t("mainSection5Box__title2")}</h4>
                        <img src={section5__img} alt="" />
                    </div>
                    <div className="section5__box">
                        <h3>{t("mainSection5Box__title1")}</h3>
                        <h4>{t("mainSection5Box__title2")}</h4>
                        <img src={section5__img} alt="" />
                    </div>
                    <div className="section5__box">
                        <h3>{t("mainSection5Box__title1")}</h3>
                        <h4>{t("mainSection5Box__title2")}</h4>
                        <img src={section5__img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page1Main__section5;
