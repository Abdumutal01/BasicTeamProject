import React from "react";
import { useTranslation } from "react-i18next"; 
import './Page1Main__section4.css'
import UseDouble from "./UseDouble/UseDouble";

function Page1Main__section4() {
    const { t } = useTranslation();

    return (
        <section>
            <h2>{t("mainSection4__title1")}</h2>
            <br />
            <p>{t("mainSection4__title2")}</p>
            <br />
          <UseDouble t={t} />
        </section>
    );
}

export default Page1Main__section4;
