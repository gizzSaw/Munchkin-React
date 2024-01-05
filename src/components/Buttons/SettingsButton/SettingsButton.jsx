import React from "react";
import settingsLogo from "../../../assets/icons/settings.jpg";

export function SettingsButton() {
  return (
    <>
      <button className="button header__button_settings">
        <img src={settingsLogo} alt="" />
      </button>
    </>
  );
}
