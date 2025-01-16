import { useState } from "react";
export default function Player({ name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  let playerNamefield = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";
  if (isEditing) {
    playerNamefield = <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />;
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
