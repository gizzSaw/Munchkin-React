import React from "react";
import confirmLogo from "../../../assets/icons/confirm.jpg";

export function ConfirmButton({ addPlayer }) {
  return (
    <>
      <button className="button header__button_confirm" onClick={addPlayer}>
        <img src={confirmLogo} alt="" />
      </button>
    </>
  );
}
