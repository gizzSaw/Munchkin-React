import React from "react";
import restartLogo from "../../../assets/icons/restart.jpg";

export function RestartButton({ clearPlayers }) {
  return (
    <>
      <button className="button header__button_restart" onClick={clearPlayers}>
        <img src={restartLogo} alt="" />
      </button>
    </>
  );
}
