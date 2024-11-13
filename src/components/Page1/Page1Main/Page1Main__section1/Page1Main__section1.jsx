import React from "react";
import { useTranslation } from "react-i18next";
import Page1MainImg1 from './Page1MainImg/Page1MainImg1.png'
import './Page1Main__section1.css'

function Page1Main() {
    const { t } = useTranslation();

    return (
        <section className="Page1Main">
            <h3>{t("mainSection1__title1")}</h3>
            <br />
            <p>{t("mainSection1__title2")}</p>
            <br />
            <div className="section1__general">
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                <div className="section1__box">
                    <img src={Page1MainImg1} alt="" />
                    <span>
                        <h3>{t("mainSection1Box1__title")}</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default Page1Main;
