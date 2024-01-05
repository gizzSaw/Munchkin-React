import React from "react";
import PlayersAvatar from "./PlayerAvatar/PlayersAvatar";

export default function PlayersItem({ name, sex, level, force, color }) {
  return (
    <li className="player">
      <PlayersAvatar name={name} color={color} />
      <div className="player__name">{name}</div>
      <div className="player__sex">{sex}</div>
      <div className="player__level">{level}</div>
      <div className="player__force">{force}</div>
    </li>
  );
}
