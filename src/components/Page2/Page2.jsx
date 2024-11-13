import React from "react";
import './Page2.css'
import line from '../Page3/img/line.png'
import img1 from './img/va.jpg'
import small1 from './img/small1.png'
import small2 from './img/small2.png'
import small3 from './img/small3.png'
import huge from './img/huge1.png'
import { Link } from "react-router-dom";

function Page1() {
  return (
    <>
      <Link to='second'>page2</Link>
      <div className="main__part">
          <div className="main__part__container">
              <div className="title__general">
                <h2>Видео</h2>
                <img src={line} alt="" />
              </div><br /><br />
              <div className="general__general">
                  <img src={img1} alt="" />
                  <div className="general__general__text">
                    <h2>Проект Казань 11111</h2> <br /><br />
                    <p>В г. Белгороде 17 апреля 2021 г. был запущен проект по <br /> обогреву выставочного павильона. Обогреваемое <br /> помещение общей площадью 1000 м2.......</p>
                  </div>
              </div><br /><br /><br/>
              <div className="small__imgs">
                  <img src={small1} alt="" />
                  <img src={small2} alt="" />
                  <img src={small3} alt="" />
                  <img src={small1} alt="" />
              </div><br /><br /><br />
              <div className="object">
                <div className="object__title">
                    <h2>Объекты</h2>
                    <img src={line}/>
                </div><br /><br />
                <div className="imgs__general">
                    <img src={huge} alt="" />
                    <img src={huge} alt="" />
                    <img src={huge} alt="" />
                </div><br /><br />
                <div className="imgs__general">
                    <img src={huge} alt="" />
                    <img src={huge} alt="" />
                    <img src={huge} alt="" />
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Page1;
