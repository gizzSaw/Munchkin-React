export default function PlayersCard({
  name,
  gender,
  level,
  force,
  color,
  findActivePlayer,
}) {
  return (
    <>
      <div className="player-card">
        <h2 className="player-card__name">{findActivePlayer().name}</h2>
        <p className="player-card__strength">
          {findActivePlayer().level + findActivePlayer().force}
        </p>
        <div className="player-card__params">
          <div className="player-card__param">
            <p className="player-card__param_title">Level </p>
            <p className="player-card__param_value">
              {findActivePlayer().level}
            </p>
            <p className="player-card__param_control">
              <span className="material-symbols-outlined">
                arrow_upward_alt
              </span>
              <span className="material-symbols-outlined">
                arrow_downward_alt
              </span>
            </p>
          </div>
          <div className="player-card__param">
            <p className="player-card__param_title">Gear </p>
            <p className="player-card__param_value">
              {findActivePlayer().force}
            </p>
            <p className="player-card__param_control">
              <span className="material-symbols-outlined">
                arrow_upward_alt
              </span>
              <span className="material-symbols-outlined">
                arrow_downward_alt
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
