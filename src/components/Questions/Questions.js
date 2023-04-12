import React, {useState, useRef} from "react";
import Title from "../Title/Title";
import line from "../../images/line5.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbwlNXnW6EGfqYIIXkw0tI1RNIdKtiAD6162QYldXepxqrm8vmGzDRiS3vEeNoScg76l/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <Title title={"Опрос"} stone={false}/>
      <img className="question__stone" src={line} alt="линии"></img>
      { isFormVisible ?
        <div className="question__container">
          <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
          <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
          <p className="question__string">
            <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
            <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
          </p>
          <p className="question__string">
            <label htmlFor="alco" className="question__label-input">Пожелания по алкоголю:</label>
            <input type="text" name="Алкоголь" id="alco" required className="question__input"></input>
          </p>
          <fieldset className="question__string">Необходима ли остановка:
            <label  htmlFor="yes-stop" className="question__label">
              <input className="question__unvisible" type="radio" name="Остановка" value="Нужна" id="yes-stop"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Да</span>
            </label>
            <label className="question__label" htmlFor="no-stop">
              <input className="question__unvisible" type="radio" name="Остановка" value="Не нужна" id="no-stop"></input>
              <span className="question__visible-radio"></span>
              <span className="question__text-span">Нет</span>
            </label>
          </fieldset>
          <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Отправить"}</button>
        </form> 
      </div>
      :
      <p className="question__text">Форма отправлена!</p>
      }
      
    </section>
  );
}

export default Questions;