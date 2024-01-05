import React from "react";
import { BackButton } from "../components/Buttons/BackButton/BackButton";
import { ConfirmButton } from "../components/Buttons/ConfirmButton/ConfirmButton";
import maleLogo from "../assets/icons/male.jpg";
import femaleLogo from "../assets/icons/female.jpg";

export default function NewMunchkin({ addPlayer }) {
  const handleChange = (event) => {
    const gender = event.target.value;
    console.log(gender);
  };

  return (
    <div className="container">
      <header className="header header__new-munchkin ">
        <BackButton />
        <h1 className="header__logo">New Munchkin</h1>
        <ConfirmButton addPlayer={addPlayer} />
      </header>
      <fieldset className="new-munchkin">
        <legend className="new-munchkin__legend">Чечик</legend>
        <ul className="new-munchkin__inputs">
          <li className="new-munchkin__input new-munchkin__input_name">
            <span>Имя: </span>
            <input type="text" />
          </li>
          <li className="new-munchkin__input new-munchkin__input_gender">
            <span>Пол: </span>
            <label className="button">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <img src={maleLogo} alt="" />
            </label>
            <label className="button">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <img src={femaleLogo} alt="" />
            </label>
          </li>
          <li className="new-munchkin__input">
            <span>Цвет: </span>
            <div className="player__avatar"></div>
          </li>
        </ul>
      </fieldset>
    </div>
  );
}
