import { useState } from "react";

export function GameDisplay({ host, playersRoom }) {
  const playersArray = [];
  for (let player in playersRoom) {
    playersArray.push(playersRoom[player]);
  };

import "../../Styling/Game-page.css";
export function GameDisplay({ host, players }) {
  console.log("host>>>", host);
  console.log("players>>>>", players);

  return (
    <section id="game-display">
      <div id="host-display">
        <p id="display--name">{host.user_name}</p>
        <p id="display--points">{host.points}</p>
      </div>

      <div id="players-display">
        {playersArray.map((player) => {
          const currentPoints = player.points;
          return (
            <li key={player.user_id}>
              <p id="display--name">{player.user_name}</p>
              <p id="display--points">{player.points}</p>
            </li>
        {players.map((player) => {
          const currentPoints = player.points;
          return (
            <div key={player.user_id}>
              <p id="display--name">{player.user_name}</p>
              <p id="display--points">{player.points - currentPoints}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
