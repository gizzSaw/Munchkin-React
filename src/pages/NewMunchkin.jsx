import React, { useState } from "react";
import { BackButton } from "../components/Buttons/BackButton/BackButton";
import { ConfirmButton } from "../components/Buttons/ConfirmButton/ConfirmButton";
import maleLogo from "../assets/icons/male.jpg";
import femaleLogo from "../assets/icons/female.jpg";
import { Form } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

export default function NewMunchkin({ setPlayers, players }) {
  const [name, setName] = useState("Sa");
  const [gender, setGender] = useState("Male");

  const addPlayer = (name, gender) => {
    //console.log(document.querySelector(".new-munchkin__input_gender input"));

    const isNameCorrect = "false"; //провалидировать имя

    const newPlayer = {
      name: name
        ? name.slice(0, 1).toUpperCase() + name.slice(1)
        : "Unknown Looser",
      gender: gender
        ? gender.slice(0, 1).toUpperCase() + gender.slice(1)
        : "Unknown gender",
      level: 1,
      force: 1,
      color: "orange",
    };

    setPlayers([...players, newPlayer]);
    players.push(newPlayer);
  };

  const handleChangeName = () => {
    setName(document.querySelector(".new-munchkin__input_name input")?.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="container">
      <header className="header header__new-munchkin ">
        <Link to="/">
          <BackButton />
        </Link>

        <h1 className="header__logo">New Munchkin</h1>
        <Link to={`/`}>
          <ConfirmButton
            addPlayer={addPlayer}
            name={name}
            gender={gender}
            players={players}
          />{" "}
        </Link>
      </header>
      <fieldset className="new-munchkin">
        <legend className="new-munchkin__legend">Чечик</legend>
        <ul className="new-munchkin__inputs">
          <li className="new-munchkin__input new-munchkin__input_name">
            <span>Имя: </span>
            <input type="text" onChange={handleChangeName} />
          </li>
          <li className="new-munchkin__input new-munchkin__input_gender">
            <span>Пол: </span>
            <label className="button">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChangeGender}
              />
              <img src={maleLogo} alt="" />
            </label>
            <label className="button">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChangeGender}
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
