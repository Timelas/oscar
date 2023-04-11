import React from "react";
import Title from "../Title/Title";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <Title title={"Детали"} stone={false}/>
      <div className="details__stone"></div>
      <div className="details__stone2"></div>
      <p className="details__text">По всем вопросам вам поможет наш замечательный свадебный координатор Александра: +7&nbsp;915&nbsp;300&#8209;51&#8209;56.</p>
        <div className="details__line"></div>
      <p className="details__text">Андрей будет очень признателен, если вы поможете осуществить Ксюшину мечту о шикарном ремонте, подарив ваши пожелания в конверте.</p>
        <div className="details__line"></div>
      <p className="details__text">Если хочется чем-то сопроводить подарок, пусть вместо цветов это будет игристое. 
Также, мы будем рады, если "цветочные" средства вы потратите на что-то важное, например, на благотворительность.</p>
        <div className="details__line"></div>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного праздника.
Никакой официальности, весёлых конкурсов и торжественных речей. 
Только близкие люди, без которых мы не представляем этот день, непринужденная атмосфера и много веселья.</p>
        <div className="details__line"></div>
      <p className="details__text">Формат мероприятия не предполагают игровой площадки и аниматоров. Пожалуйста, по-возможности, освободите этот вечер для себя.</p>
    </section>
  );
}

export default Details;