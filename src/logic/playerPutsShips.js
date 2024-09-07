import displayShips from "./displayShips";

let currentMouseOverFunction = null;
let currentMouseOutFunction = null;

const hoverColor = "rgb(173, 216, 230)";

export default function playerPutsShips(player) {
  const popup = document.querySelector(".popup");

  let index = 0;
  const board = document.querySelector(".popup-board");

  const fields = board.childNodes;

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
      console.log(`Current ship lenght: ${ship.length}`);

      if (playerBoard.placeShip(ship, x, y, player.direction)) {
        index += 1;
        removeHover();
        hoverPutting(playerBoard, player, index);
      }
      if (index === 5) {
        popup.style.display = "none";
        return;
      }

      displayShips(player, board);
    });
  });
}

function handleMouseOver(gameboard, player, index) {
  const board = document.querySelector(".popup-board");
  return function () {
    this.style.cursor = "auto";
    console.log(this);
    console.log(index);
    const x = parseInt(this.className.split("-")[1]);
    const y = parseInt(this.className.split("-")[2].split(" ")[0]);

    if (player.direction === "x") {
      if (
        gameboard.board[x][y] !== null ||
        y + gameboard.ships[index].length > 10
      ) {
        console.log("x out of boundaries error");
        this.style.cursor = "not-allowed";
        return;
      }
      if (y + gameboard.ships[index].length <= 10) {
        // checkin if u can place ship
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          if (gameboard.board[x][y + i] !== null) {
            console.log("x ship already there");
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
        console.log("y out of boundaries error");
        this.style.cursor = "not-allowed";
        return;
      }
      if (x + gameboard.ships[index].length <= 10) {
        // checkin if u can place ship
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          if (gameboard.board[x + i][y] !== null) {
            console.log("y ship already there");
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
