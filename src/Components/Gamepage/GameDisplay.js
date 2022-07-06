import { useState } from "react";
import "../../Styling/Game-page.css";
export default function GameDisplay({ roomHost, playersRoom, hostPoints}) {
  const playersArray = [];
  for (let player in playersRoom) {
    playersArray.push(playersRoom[player]);
  };

  return roomHost && playersRoom ? (

    <section id="game-display">
      
      <div id="host-display">
        <p id="display--name">{roomHost.user_name}</p>
        <p id="display--points">{hostPoints}</p>
      </div>

      <div id="players-display">
        {playersArray.map((player) => {
          return (
            <li key={player.user_id}>
              <p id="display--name">{player.user_name}</p>
              <p id="display--points">{player.points}</p>
            </li>
          );
        })}
      </div>
    </section>
  ): null;
}
