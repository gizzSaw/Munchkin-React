import React from "react";
import diceLogo from "../../../assets/icons/dice.jpg";

export function DiceButton() {
  return (
    <>
      <button className="button header__button_dice">
        <img src={diceLogo} alt="" />
      </button>
    </>
  );
}
