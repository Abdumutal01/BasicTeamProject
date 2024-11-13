import React from "react";
import './kartochka.css'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import line from './img/line.png'

function Kart(){
    return(
        <>
        <div className="Kart">
            <div className="Kart__general">
                <h4 className="title">Дизельный генератор <span className="red">Master BV 690</span> в аренду</h4><br /><br />
                <div className="Kart__items">
                    <div className="Kart__first">
                        <img className="huge" src={img1} alt="" /><br /><br /><br />
                        <div className="imgs__general">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className="Kart__second">
                        <div className="text__items">
                            <ul>
                                <li>Цена  30 смен</li>
                                <li className="red"> 6000 руб.</li>
                            </ul>
                            <ul>
                                <li>Цена  30 смен</li>
                                <li className="red">7800 руб.</li>
                            </ul>
                            <button className="btn">АРЕНДОВАТЬ</button>
                        </div><br /><br />
                        <h4>Характеристики:</h4>
                        <div className="texts__general">
                            <ul>
                                <li>Страна производитель</li>
                                <li>Великобритания</li>
                            </ul>
                            <ul>
                                <li>Напряжение</li>
                                <li>220-380В, 55Гц</li>
                            </ul><br />
                            <ul> 
                                <li>Объем бака</li>
                                <li>888 л.</li>
                            </ul><hr />
                            <ul>
                                <li>Dvigatel</li>
                                <li>1500 об/мин</li>
                            </ul><hr />
                            <ul>
                                <li>Marka dvigazet</li>
                                <li>Perkins</li>
                            </ul><hr />
                            <ul>
                                <li>Расход с нагрузкой 50% </li>
                                <li>34,8 л/ч</li>
                            </ul><hr />
                            <ul>
                                <li>Габариты</li>
                                <li> 4400/1700/2200</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="last__title">
                    <h4>О ТОВАРЕ</h4>
                    <img src={line} alt="" />
                </div><br /><br />
                <p>Компания Climat Trading - активный участник рынка климатических услуг, обеспечивающий оборудованием строительные объекты, <br /> производственные и складские помещения, временные конструкции и сооружения на территории России. <br />
                Благодаря обширному парку оборудования компания Climat Trading успешно занимается снабжением строительных объектов даже в самых <br /> отдаленных уголках нашей страны, предоставляет услуги доставки, подключения, настройки, а также обслуживания теплового оборудования 24 часа в сутки. <br />
                За время работы наши услуги стали востребованными не только Москве, Екатеринбурге, Твери, Рязани, Туле, Вологде, Калуге, Пензе, Уфе, <br /> Североморске, Выборге, Южносахалинске, а также других городах и регионах России. Этот перечень, надеемся, будет расширяться и дальше.</p>
            </div>
        </div>
        </>
    )
}
export default Kart;