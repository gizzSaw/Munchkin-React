import React, { useState } from "react";
import PlayersItem from "./PlayerItem/PlayersItem";
import playersList from "../../state/playersList";

export function PlayersList() {
  const [players, setPlayers] = useState(playersList);
  const addPlayer = () => {
    const newPlayer = {
      name: "New Player",
      sex: "Male",
      level: 1,
      force: 100,
      color: "blue",
    };
    setPlayers([...players, newPlayer]);
  };

  return (
    <div className="container">
      <div className="players">
        <ul className="players__list">
          {players.map((item) => {
            return (
              <PlayersItem
                key={Math.random()}
                name={item.name}
                sex={item.sex}
                level={item.level}
                force={item.force}
                color={item.color}
              />
            );
          })}
        </ul>
        <button className="players__add-button" onClick={addPlayer}>
          +
        </button>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import PlayersItem from "./PlayerItem/PlayersItem";
// import playersList from "../../state/playersList";

// export function PlayersList() {
//   const [players, setPlayers] = useState(playersList);
//   const addPlayer = () => {
//     const newPlayer = {
//       name: "New Player",
//       sex: "Male",
//       level: 1,
//       force: 100,
//       color: "blue",
//     };
//     setPlayers([...players, newPlayer]);
//   };

//   addPlayer();

//   return (
//     <div className="container">
//       <div className="players">
//         <ul className="players__list">
//           {players.map((item) => {
//             return (
//               <PlayersItem
//                 key={Math.random()}
//                 name={item.name}
//                 sex={item.sex}
//                 level={item.level}
//                 force={item.force}
//                 color={item.color}
//               />
//             );
//           })}
//         </ul>
//         <button className="players__add-button" onClick={addPlayer}>
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import PlayersItem from "./PlayerItem/PlayersItem";
// import playersList from "../../state/playersList";

// export function PlayersList() {
//   const [players, setPlayers] = useState(playersList);

//   return (
//     <>
//       <div className="container">
//         <div className="players">
//           <ul className="players__list">
//             {playersList.map((item) => {
//               return (
//                 <PlayersItem
//                   key={Math.random()}
//                   name={item.name}
//                   sex={item.sex}
//                   level={item.level}
//                   force={item.force}
//                   color={item.color}
//                 />
//               );
//             })}
//           </ul>
//           <button className="players__add-button">+</button>
//         </div>
//       </div>
//     </>
//   );
// }
