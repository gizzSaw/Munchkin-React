import React, { useState, useEffect } from "react";
import playersList from "../../state/playersList";

export function Header() {
  const [players, setPlayers] = useState(playersList);

  useEffect(() => {
    setPlayers(players);
  }, []);

  const clearPlayers = () => {
    console.log("clearPlayers2");
    setPlayers([]);
  };

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

// import React, { useState } from "react";
// import playersList from "../../state/playersList";

// export function Header() {
//   const [players, setPlayers] = useState(playersList);

//   const clearPlayers = () => {
//     console.log("clearPlayers");
//     setPlayers([]);
//   };

//   return (
//     <>
//       <div className="container">
//         <header className="header">
//           <h1 className="header__logo">Munchkins</h1>
//           <ul className="header__buttons">
//             <li className="header__button">
//               <button className="header__button_restart" onClick={clearPlayers}>
//                 <img src="icons/restart.jpg" alt="" />
//               </button>
//             </li>
//             <li className="header__button">
//               <button className="header__button_dice">
//                 <img src="icons/dice.jpg" alt="" />
//               </button>
//             </li>
//             <li className="header__button">
//               <button className="header__button_settings">
//                 <img src="icons/settings.jpg" alt="" />
//               </button>
//             </li>
//           </ul>
//         </header>
//       </div>
//     </>
//   );
// }
