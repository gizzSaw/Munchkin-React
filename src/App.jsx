import "./App.css";
import React, { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { PlayersList } from "./components/PlayersList/PlayersList";
import playersList from "./state/playersList";
import NewMunchkin from "./pages/NewMunchkin";

function App() {
  // следим за массивом игроков
  const [players, setPlayers] = useState(playersList);

  return (
    <div className="App">
      <NewMunchkin setPlayers={setPlayers} players={players} />
      <Header setPlayers={setPlayers} players={players} />
      <PlayersList players={players} />
    </div>
  );
}

export default App;

//PlayersList добавить функцию открытия окна нью-манчкин
