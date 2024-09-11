import { player } from "../index";
import displayPlayerShips from "./displayPlayerShips";

export default function computerAttack() {
  console.log();
  const playerBoard = document.querySelector(".game-board");

  const playerShips = player.gameboard;

  while (true) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const field = playerBoard.querySelector(`.field-${x}-${y}`);
    console.log(`field-${x}-${y}`);
    if (field.classList.contains("hit") || field.classList.contains("miss")) {
      console.log("Already attacked");
      continue;
    } else if (playerShips.receiveAttack(x, y) === true) {
      // changed else to else if
      field.classList.add("hit");
      if (playerShips.areAllShipsSunk()) {
        alert("You lost!");
      }
    } else {
      field.classList.add("miss");
    }
    break;
  }

  displayPlayerShips(player, playerBoard);
}
