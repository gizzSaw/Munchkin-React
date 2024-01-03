import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { PlayersList } from "./components/PlayersList/PlayersList";
import playersList from "./state/playersList";

function App() {
  // следим за массивом игроков
  const [players, setPlayers] = useState(playersList);

  //пока что вымышленный игрок
  //потом нужно будет написать форму для добавления нового игрока
  const addPlayer = () => {
    const newPlayer = {
      name: "New Player",
      sex: "Male",
      level: 1,
      force: 1,
      color: "orange",
    };

    setPlayers([...players, newPlayer]);
    players.push(newPlayer);
  };

  const clearPlayers = () => {
    console.log("clearPlayers", players);
    setPlayers([]);
  };

  return (
    <div className="App">
      <Header clearPlayers={clearPlayers} players={players} />
      <PlayersList addPlayer={addPlayer} players={players} />
    </div>
  );
}

export default App;
