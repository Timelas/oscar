import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <section className="title">
      <div  className="title__block">
        <div className={`title__stone title__stone_${props.stone && 'visible'}`}></div>
        <h2 className="title__title">{props.title}</h2>
      </div>
    </section>
  );
}

export default Title;