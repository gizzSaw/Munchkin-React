import PlayersAvatar from "./PlayerAvatar/PlayersAvatar";

export default function PlayersItem({
  name,
  gender,
  level,
  force,
  color,
  changeActivePlayers,
}) {
  return (
    <li className="player" onClick={changeActivePlayers}>
      <PlayersAvatar name={name} color={color} />
      <div className="player__name">{name}</div>
      <div className="player__gender">{gender}</div>
      <div className="player__level">{level}</div>
      <div className="player__force">{force}</div>
    </li>
  );
}
