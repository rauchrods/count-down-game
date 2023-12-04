import { useState, useRef } from "react";

export default function Player() {
  const playerInput = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function clickHandler() {
    setPlayerName(playerInput.current.value);
    playerInput.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={playerInput} type="text" />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
