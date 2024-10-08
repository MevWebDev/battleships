import displayPlayerShips from "./displayPlayerShips";
import playerAttack from "./playerAttacks";

let currentMouseOverFunction = null;
let currentMouseOutFunction = null;

const hoverColor = "rgb(173, 216, 230)";

export default function playerPutsShips(player, computer) {
  const popup = document.querySelector(".popup");

  let index = 0;
  const popupBoard = document.querySelector(".popup-board");
  const board = document.querySelector(".game-board");

  const fields = popupBoard.childNodes;

  const playerBoard = player.gameboard;
  const playerShips = playerBoard.ships;

  hoverPutting(playerBoard, player, index);

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      const { className } = field;
      const parts = className.split("-");
      const x = parseInt(parts[1], 10);
      const y = parseInt(parts[2].split(" ")[0], 10);
      const ship = playerShips[index];

      if (playerBoard.placeShip(ship, x, y, player.direction)) {
        index += 1;
        removeHover();
        hoverPutting(playerBoard, player, index);
      }
      if (index === 5) {
        popup.style.display = "none";
        displayPlayerShips(player, board);
        playerAttack(computer, player);
        return;
      }

      displayPlayerShips(player, popupBoard);
    });
  });
}

function handleMouseOver(gameboard, player, index) {
  const board = document.querySelector(".popup-board");
  return function () {
    this.style.cursor = "auto";

    const x = parseInt(this.className.split("-")[1]);
    const y = parseInt(this.className.split("-")[2].split(" ")[0]);

    if (player.direction === "x") {
      if (
        gameboard.board[x][y] !== null ||
        y + gameboard.ships[index].length > 10
      ) {
        this.style.cursor = "not-allowed";
        return;
      }
      if (y + gameboard.ships[index].length <= 10) {
        // checkin if u can place ship
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          if (gameboard.board[x][y + i] !== null) {
            this.style.cursor = "not-allowed";
            return;
          }
        }
        // hovering over fields
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          const field = board.querySelector(`.field-${x}-${y + i}`);

          if (field !== null) {
            if (field.style.backgroundColor === "transparent")
              field.style.backgroundColor = hoverColor;
          }
        }
      }
    }
    if (player.direction === "y") {
      if (
        gameboard.board[x][y] !== null ||
        x + gameboard.ships[index].length > 10
      ) {
        this.style.cursor = "not-allowed";
        return;
      }
      if (x + gameboard.ships[index].length <= 10) {
        // checkin if u can place ship
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          if (gameboard.board[x + i][y] !== null) {
            this.style.cursor = "not-allowed";
            return;
          }
        }
        // hovering over fields
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          const field = board.querySelector(`.field-${x + i}-${y}`);

          if (field !== null) {
            if (field.style.backgroundColor === "transparent")
              field.style.backgroundColor = hoverColor;
          }
        }
      }
    }
  };
}
function handleMouseOut(gameboard, player, index) {
  const board = document.querySelector(".popup-board");
  return function () {
    const x = parseInt(this.className.split("-")[1]);
    const y = parseInt(this.className.split("-")[2].split(" ")[0]);

    if (this.style.backgroundColor !== hoverColor) return;

    if (player.direction === "x") {
      if (y + gameboard.ships[index].length <= 10) {
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          const field = board.querySelector(`.field-${x}-${y + i}`);

          if (field !== null) {
            if (field.style.backgroundColor === hoverColor)
              field.style.backgroundColor = "transparent";
          }
        }
      }
    }
    if (player.direction === "y") {
      if (x + gameboard.ships[index].length <= 10) {
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          const field = board.querySelector(`.field-${x + i}-${y}`);

          if (field !== null) {
            if (field.style.backgroundColor === hoverColor)
              field.style.backgroundColor = "transparent";
          }
        }
      }
    }
  };
}

function hoverPutting(gameboard, player, index) {
  if (index === 5) return;
  const board = document.querySelector(".popup-board");
  const fields = board.childNodes;

  currentMouseOverFunction = handleMouseOver(gameboard, player, index);
  currentMouseOutFunction = handleMouseOut(gameboard, player, index);
  fields.forEach((field) => {
    field.addEventListener("mouseover", currentMouseOverFunction);
    field.addEventListener("mouseout", currentMouseOutFunction);
  });
}

function removeHover() {
  const board = document.querySelector(".popup-board");
  const fields = board.childNodes;
  if (currentMouseOverFunction && currentMouseOutFunction) {
    fields.forEach((field) => {
      field.removeEventListener("mouseover", currentMouseOverFunction);
      field.removeEventListener("mouseout", currentMouseOutFunction);
    });
    currentMouseOverFunction = null;
    currentMouseOutFunction = null;
  }
}
