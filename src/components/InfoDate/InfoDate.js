import React from "react";
import "./InfoDate.css";

function InfoDate() {
  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <p className="info-date__who">Дорогие</p>
        <p className="info-date__who">родные и друзья!</p>
        <p className="info-date__text">Мы хотим, чтобы в этот день рядом с нами были самые близкие и дорогие для нас люди. Будем рады разделить с вами чудесный праздник в день нашей свадьбы!</p>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in">
          <p className="info-date__what">Вечеринка <br /> для самых близких</p>
        </div>
        <p className="info-date__day-week">Воскресенье</p>
        <div className="info-date__day">
          <div className="info-date__stone"></div>
          <p className="info-date__number">25</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">06</p>
          <div className="info-date__vertical-line"></div>
          <p className="info-date__number">23</p>
        </div>
        <p className="info-date__time">Начало в 19.00</p>
        <div className="info-date__banquet">
          <p className="info-date__where">Теплоход "Амели"</p>
          <p className="info-date__where">Санкт-Петербург, набережная Макарова 34</p>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;