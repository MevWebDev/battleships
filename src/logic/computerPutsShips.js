import displayShips from "./displayEnemyShips";

export default function computerPutsShips(computer) {
  const gameboard = document.querySelector(".miss-board");
  let index = 0;
  const computerBoard = computer.gameboard;
  const computerShips = computerBoard.ships;

  while (index < computerShips.length) {
    const ship = computerShips[index];
    let placed = false;
    while (placed !== true) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const directionNumber = Math.floor(Math.random() * 2);
      let direction;
      if (directionNumber === 0) direction = "x";
      else direction = "y";
      placed = computerBoard.placeShip(ship, x, y, direction);
    }

    index += 1;
  }

  displayShips(computer, gameboard);
}
