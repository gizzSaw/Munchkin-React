import React from "react";
import backLogo from "../../../assets/icons/back.jpg";

export function BackButton() {
  return (
    <>
      <button className="button header__button_back">
        <img src={backLogo} alt="" />
      </button>
    </>
  );
}
