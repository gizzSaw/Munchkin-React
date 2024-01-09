import React from "react";
import { RestartButton } from "../Buttons/RestartButton/RestartButton";
import { DiceButton } from "../Buttons/DiceButton/DiceButton";
import { SettingsButton } from "../Buttons/SettingsButton/SettingsButton";

export function Header({ setPlayers, players }) {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="header__logo">Munchkin - Level Counter</h1>
          <ul className="header__buttons">
            <li>
              <RestartButton setPlayers={setPlayers} players={players} />
            </li>
            <li>
              <DiceButton />
            </li>
            <li>
              <SettingsButton />
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

// проблема была в том что у моих компонентов разная область видимости, и поэтому у них
// использовались разные переменные в хуке юз стейт
// помог перенос функций в корневую компоненту
// и оттуда функции прокидываются пропсами в мои компоненты
// таким образом имя один юз стейт на двоих
