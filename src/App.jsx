import "./App.css";
import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { PlayersList } from "./components/PlayersList/PlayersList";
import playersList from "./state/playersList";
import NewMunchkin from "./pages/NewMunchkin";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";

function App() {
  // следим за массивом игроков
  const [players, setPlayers] = useState(playersList);

  const router = createBrowserRouter([
    {
      path: "/new",
      element: <NewMunchkin setPlayers={setPlayers} players={players} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/list",
      element: <NewMunchkin setPlayers={setPlayers} players={players} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: (
        <>
          <Header setPlayers={setPlayers} players={players} />
          <PlayersList setPlayers={setPlayers} players={players} />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

//PlayersList добавить функцию открытия окна нью-манчкин
