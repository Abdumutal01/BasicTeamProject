import React from "react";
import Page1Main__section from './Page1Main__section1/Page1Main__section1'
import Page1Main__section2 from "./Page1Main__section2/Page1Main__section2";
import Page1Main__section3 from "./Page1Main__section3/Page1Main__section3";
import Page1Main__section4 from "./Page1Main__section4/Page1Main__section4";
import Page1Main__section5 from "./Page1Main__section5/Page1Main__section5";

function Page1Main() {
    return (
        <main>
            <div className="container">
                <Page1Main__section />
            </div>
            <Page1Main__section2 />
            <Page1Main__section3 />
            <div className="container">
                <Page1Main__section4 />
            </div>
            <Page1Main__section5 />
        </main>
    )
}

export default Page1Main