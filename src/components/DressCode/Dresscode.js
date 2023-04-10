import React from "react";
import Title from "../Title/Title";
import "./Dresscode.css";

function Dresscode() {
  return (
    <section className="dresscode" id="dresscode">
      <Title title={"Dress code"} stone={true}/>
      <p className="dresscode__description">Стиль вечеринки "Оскар". <br /> Для джентльменов уместным будет классический костюм со светлой рубашкой, дополненный бабочкой.
      <br /> Для дам просим выбрать вечерние и коктейльные платья в пол и избегать белого цвета.
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