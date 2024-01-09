import PlayersItem from "./PlayerItem/PlayersItem";

export function PlayersList({ players }) {
  return (
    <div className="container">
      <div className="players">
        <ul className="players__list">
          <li className="player">
            <div className="players__column-name">Аватар</div>
            <div className="players__column-name">Чечик</div>
            <div className="players__column-name">Пол</div>
            <div className="players__column-name">Уровень</div>
            <div className="players__column-name">Сила</div>
          </li>
          {players.map((item) => {
            return (
              <PlayersItem
                key={Math.random()}
                name={item.name}
                gender={item.gender}
                level={item.level}
                force={item.force}
                color={item.color}
              />
            );
          })}
        </ul>
        <button className="players__add-button">+</button>
      </div>
    </div>
  );
}
