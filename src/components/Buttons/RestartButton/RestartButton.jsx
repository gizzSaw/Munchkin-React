import React from "react";
import restartLogo from "../../../assets/icons/restart.jpg";

export function RestartButton({ setPlayers, players }) {
  const clearPlayers = () => {
    console.log("clearPlayers", players);
    setPlayers([]);
  };

  const updatePlayrs = () => {
    players.forEach((player, index) => {
      console.log("players № ", index + 1, "force", player.force);
      player.force = 1;
      player.level = 1;
    });
    console.log("updatePlayrs", players);
    setPlayers([...players]);
  };

  return (
    <>
      <button className="button header__button_restart" onClick={updatePlayrs}>
        <img src={restartLogo} alt="" />
      </button>
    </>
  );
}
