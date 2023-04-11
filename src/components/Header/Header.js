import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Header.css";
import newlyweds from "../../images/newlyweds.jpg";

function Header() {
  const resize = useMediaQuery('(min-width: 700px)');
  return (
    <section className="header" id="home">
      {
        resize ? (
          <div className="header__desctop">
            <div className="header__stone2"></div>
            <div className="header__stone"></div>
            <img src={newlyweds} className="header__image" alt="молодожены"></img>
            <div className="header__info">
              <div className="header__info-names">
                <p className="header__info_name">Ксения и</p>
                <p className="header__info_name header__info_name_two">Андрей</p>
              </div>
              <p className="header__info_date">25 июня 2023</p>
            </div>
          </div>
        ) : (
          <div className="header__mobile">
            <div className="header__stone3"></div>
            <div className="header__info-mobile">
              <p className="header__info_names-mobile header__info_names-mobile1">Ксения и</p>
              <p className="header__info_names-mobile header__info_names-mobile2">Андрей</p>
            </div>
            <img src={newlyweds} className="header__image-mobile" alt="молодожены"></img>
            <p className="header__info_date-mobile">25 июня 2023</p>
          </div>
        )
      }
    </section>
  );
}

export default Header;