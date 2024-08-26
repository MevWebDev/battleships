import displayShips from "./displayShips";

export default function playerPutsShips(player) {
  const gameboard = document.querySelector(".board");
  let index = 0;
  const board = document.querySelector(".game-board");
  const fields = board.childNodes;
  const playerBoard = player.gameboard;
  const playerShips = playerBoard.ships;

  hoverPutting(playerBoard);

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      const { className } = field;
      const parts = className.split("-");
      const x = parseInt(parts[1], 10);
      const y = parseInt(parts[2].split(" ")[0], 10);
      const ship = playerShips[index];
      if (playerBoard.placeShip(ship, x, y, player.direction)) {
        if (index === 5) {
          removeHover();
          return;
        }
        index += 1;
        hoverPutting(playerBoard, playerShips, index);
      }
      console.log(playerBoard.board);
      displayShips(player, gameboard);
    });
  });
}

function handleMouseOver(gameboard) {
  return function () {
    const x = this.className.split("-")[1];
    const y = this.className.split("-")[2].split(" ")[0];
    console.log(gameboard.board[x][y]);
    if (gameboard.board[x][y] !== null) {
      this.style.cursor = "not-allowed";
      return;
    }
    this.style.backgroundColor = "blue";
  };
}
function handleMouseOut() {
  return function () {
    if (this.style.backgroundColor !== "blue") return;

    this.style.backgroundColor = "transparent";
  };
}

function hoverPutting(gameboard) {
  const board = document.querySelector(".game-board");
  const fields = board.childNodes;
  fields.forEach((field) => {
    field.addEventListener("mouseover", handleMouseOver(gameboard));
    field.addEventListener("mouseout", handleMouseOut());
  });
}

function removeHover() {
  const board = document.querySelector(".game-board");
  const fields = board.childNodes;
  fields.forEach((field) => {
    field.removeEventListener("mouseover", handleMouseOver);
    field.removeEventListener("mouseout", handleMouseOut);
  });
}
