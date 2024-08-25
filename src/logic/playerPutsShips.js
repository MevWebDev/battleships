import displayShips from "./displayShips";

export default function playerPutsShips(player) {
  const gameboard = document.querySelector(".board");
  let index = 0;
  const board = document.querySelector(".game-board");
  const fields = board.childNodes;
  const playerBoard = player.gameboard;
  const playerShips = playerBoard.ships;

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      if (index === 5) {
        return;
      }
      const { className } = field;
      const parts = className.split("-");
      const x = parseInt(parts[1], 10);
      const y = parseInt(parts[2].split(" ")[0], 10);
      const ship = playerShips[index];
      if (playerBoard.placeShip(ship, x, y, player.direction)) index += 1;
      if (player.direction === "horizontally") player.direction = "vertically";
      else player.direction = "horizontally";
      console.log(playerBoard.board);
      displayShips(player, gameboard);
    });
  });
}
