import React from "react";
import "./Timetable.css";
import line from "../../images/line5.svg";
import Title from "../Title/Title";
import legsgo from "../../images/legsgo.svg";
import foto from "../../images/foto.svg";
import glasses from "../../images/glasses.svg";
import plate from "../../images/tepl.svg";
import cake from "../../images/cake.svg";
import music from "../../images/music.svg";
import car from "../../images/car.svg";
import lineStart from "../../images/start.svg";
import lineEnd from "../../images/end.svg";
import lineCenter from "../../images/center.svg";

function Timetable() {
  return (
    <section className="timetable" id="plan">
      <Title title={"План дня"}/>
      <img className="timetable__stone" src={line} alt="линии"></img>
      <div className="timetable__block">
        <img alt="legsgo" className="timetable__pic timetable__pic_visual_rings" src={legsgo}></img>
        <img alt="foto" className="timetable__pic timetable__pic_visual_foto" src={foto}></img>
        <img alt="glasses" className="timetable__pic timetable__pic_visual_glasses" src={glasses}></img>
        <img alt="plate" className="timetable__pic timetable__pic_visual_plate" src={plate}></img>
        <img alt="cake" className="timetable__pic timetable__pic_visual_cake" src={cake}></img>
        <img alt="music" className="timetable__pic timetable__pic_visual_music" src={music}></img>
        <img alt="car" className="timetable__pic timetable__pic_visual_car" src={car}></img>
        <img className="timetable__line timetable__line_center_foto" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_glasses" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_plate" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_cake" src={lineCenter} alt="линия"></img>
        <img className="timetable__line timetable__line_center_music" src={lineCenter} alt="линия"></img>
        <img className="timetable__line-start" src={lineStart} alt="линия"></img>
        <img className="timetable__line-end" src={lineEnd} alt="линия"></img>
        <p className="timetable__text timetable__text_about_rings">Сбор гостей<br />18.50</p>
        <p className="timetable__text timetable__text_about_foto">Отправление теплохода <br />19.00</p>
        <p className="timetable__text timetable__text_about_glasses">Фуршет 19:30</p>
        <p className="timetable__text timetable__text_about_plate">Выступление артистов <br /> 20.30</p>
        <p className="timetable__text timetable__text_about_cake">Свадебный торт <br /> 22.00</p>
        <p className="timetable__text timetable__text_about_music">Танцы <br /> 22.00 - 23.00</p>
        <p className="timetable__text timetable__text_about_car">Завершение вечера 23.00</p>
      </div>
    </section>
  );
}

export default Timetable;