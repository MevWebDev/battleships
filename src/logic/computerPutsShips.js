import displayShips from "./displayShips";

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
      if (directionNumber === 0) direction = "horizontally";
      else direction = "vertically";
      placed = computerBoard.placeShip(ship, x, y, direction);
      if (placed) console.log(x, y);
    }

    index += 1;
  }
  console.log(computerBoard);
  displayShips(computer, gameboard);
}