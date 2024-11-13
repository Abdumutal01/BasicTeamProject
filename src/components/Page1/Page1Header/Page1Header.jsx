import React from "react";
import { useTranslation } from "react-i18next"; 
import HeroHeaderImg1 from './Page1HeaderImgs/Page1HeaderImg1.png'
import './Page1Header.css'

function Page1Header() {
    const { t } = useTranslation();

    return (
        <section className="Page1Header">
            <div className="container">
                <div className="heroHeader__general">
                    <div className="heroHeaderBox__general">
                        <div className="heroHeader__box1">
                            <h2>{t("heroHeaderBox1__title1")}</h2> 
                            <p>{t("heroHeaderBox1__title2")}</p>
                        </div>
                        <div className="heroHeader__box2">
                            <h2>{t("heroHeaderBox2__title1")}</h2>
                            <p>{t("heroHeaderBox2__title2")}</p>
                        </div>
                    </div>
                    <img src={HeroHeaderImg1} alt="" />
                </div>
            </div>
        </section>
    );
}

export default Page1Header;
