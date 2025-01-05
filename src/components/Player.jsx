import { useState } from "react";
export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  };

  let playerNamefield = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";
  if (isEditing) {
    playerNamefield = <input type="text" value={playerName} onChange={handleChange} />;
    buttonText = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerNamefield}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{buttonText}</button>
    </li>
  );
}
