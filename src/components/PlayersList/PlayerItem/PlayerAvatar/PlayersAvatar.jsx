export default function PlayersAvatar({ name, color }) {
  return (
    <div className="player__avatar" style={{ backgroundColor: color }}>
      {name.slice(0, 1)}
    </div>
  );
}
