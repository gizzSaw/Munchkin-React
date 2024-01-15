import { useState, useEffect } from "react";
import PlayersCard from "./PlayerCard/PlayerCard";
import PlayersItem from "./PlayerItem/PlayersItem";
import { Form } from "react-router-dom";

export function PlayersList({ players, setPlayers }) {
  const [active, setActive] = useState(false);

  function isUserActive() {
    const isActive = findActiveIndex() > -1 ? true : false;
    return isActive;
  }

  function findActivePlayer() {
    //поиск активного элемента
    return players.find((item) => item.active === true);
  }

  function findActiveIndex() {
    //поиск индекса активного элемента
    return players.indexOf(findActivePlayer());
  }

  function clearActive() {
    //иногда нужно будет только убирать текущую активность, не добаляя новую
    players.forEach((player) => {
      player.active = false;
    });
    setPlayers([...players]);
  }

  function changeActivePlayers(event) {
    //удалить старую и добавить новую активность
    const targetElem = event.target.closest("li"); //closest чтоб не проваливаться вглубь элемента
    const targetName = targetElem.querySelector(".player__name").innerHTML;
    const targetPlayer = players.find((item) => item.name === targetName); //по имени находим юзера
    const targetPlayerIndex = players.indexOf(targetPlayer);

    if (findActiveIndex() === targetPlayerIndex) {
      clearActive(); //удалили старую
      setActive(isUserActive());
      setPlayers([...players]);
      console.log("совпало", active, players);
    } else {
      clearActive(); //удалили старую и добавить новую
      targetPlayer.active = true;
      players[targetPlayerIndex] = targetPlayer;
      setPlayers([...players]);
      setActive(isUserActive());
      console.log("не совпало", active, players);
    }
    //console.log("active", active);
    //console.log(targetPlayer);
  }

  return (
    <div className="container">
      {active && (
        <>
          <PlayersCard />
          <h2>{findActivePlayer().name}</h2>
          <p>Уровень {findActivePlayer().level}</p>
          <p>Сила {findActivePlayer().force}</p>
        </>
      )}

      <div className="players">
        <ul className="players__list">
          <li className="player">
            <div className="players__column-name">Аватар</div>
            <div className="players__column-name">Чечик</div>
            <div className="players__column-name">Пол</div>
            <div className="players__column-name">Уровень</div>
            <div className="players__column-name">Сила</div>
          </li>
          {players.map((player) => {
            return (
              <PlayersItem
                key={Math.random()}
                name={player.name}
                gender={player.gender}
                level={player.level}
                force={player.force}
                color={player.color}
                active={player.active}
                changeActivePlayers={changeActivePlayers}
              />
            );
          })}
        </ul>
        <Form action="new">
          <button className="players__add-button">+</button>
        </Form>
      </div>
    </div>
  );
}
