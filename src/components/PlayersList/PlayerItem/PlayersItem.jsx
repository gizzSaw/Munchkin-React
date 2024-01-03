import React from "react";

export default function PlayersItem({ name, sex, level, force, color }) {
  return (
    <li className="player">
      <div className="player__avatar" style={{ backgroundColor: color }}>
        {name.slice(0, 1)}
      </div>
      <div className="player__name">{name}</div>
      <div className="player__sex">{sex}</div>
      <div className="player__level">{level}</div>
      <div className="player__force">{force}</div>
    </li>
  );
}
