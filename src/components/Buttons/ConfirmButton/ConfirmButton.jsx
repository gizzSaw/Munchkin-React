import React from "react";
import confirmLogo from "../../../assets/icons/confirm.jpg";

export function ConfirmButton({ addPlayer, name, gender }) {
  return (
    <>
      <button
        className="button header__button_confirm"
        onClick={() => addPlayer(name, gender)}
      >
        <img src={confirmLogo} alt="" />
      </button>
    </>
  );
}
