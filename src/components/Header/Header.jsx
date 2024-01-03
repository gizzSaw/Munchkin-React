import React from "react";

export function Header({ clearPlayers, players }) {
  console.log("players", players);

  return (
    <>
      <div className="container">
        <header className="header">
          <h1 className="header__logo">Munchkins</h1>
          <ul className="header__buttons">
            <li className="header__button">
              <button className="header__button_restart" onClick={clearPlayers}>
                <img src="icons/restart.jpg" alt="" />
              </button>
            </li>
            <li className="header__button">
              <button className="header__button_dice">
                <img src="icons/dice.jpg" alt="" />
              </button>
            </li>
            <li className="header__button">
              <button className="header__button_settings">
                <img src="icons/settings.jpg" alt="" />
              </button>
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
