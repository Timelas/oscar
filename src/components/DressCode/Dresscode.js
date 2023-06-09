import React from "react";
import Title from "../Title/Title";
import line from "../../images/line2.svg";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <Title title={"Dress code"}/>
      <img className="dresscode__stone" src={line} alt="линии"></img>
      <p className="dresscode__description">Стиль вечеринки "Оскар". <br /> Для джентльменов уместным будет классический костюм со светлой рубашкой, дополненный бабочкой.
       Для дам просим выбрать вечерние и коктейльные платья в пол и избегать белого цвета.
</p>
      <div className="dresscode__colors">
        <div className="dresscode__color dresscode__color_var_one"></div>
        <div className="dresscode__color dresscode__color_var_six"></div>
        <div className="dresscode__color dresscode__color_var_three"></div>
        <div className="dresscode__color dresscode__color_var_four"></div>
        <div className="dresscode__color dresscode__color_var_two"></div>
        <div className="dresscode__color dresscode__color_var_five"></div>
      </div>
    </section>
  );
}

export default Dresscode;