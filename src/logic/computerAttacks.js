import displayPlayerShips from "./displayPlayerShips";
import endGame from "./result";

export default function computerAttack(player, computer) {
  const playerBoard = document.querySelector(".game-board");

  const playerShips = player.gameboard;

  while (true) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const field = playerBoard.querySelector(`.field-${x}-${y}`);
    if (field.classList.contains("hit") || field.classList.contains("miss")) {
      continue;
    } else if (playerShips.receiveAttack(x, y) === true) {
      // changed else to else if
      field.classList.add("hit");
      if (playerShips.areAllShipsSunk()) {
        endGame("You lost", player, computer);

        return;
      }
    } else {
      field.classList.add("miss");
    }
    break;
  }

  displayPlayerShips(player, playerBoard);
}
