/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/app.js":
/*!*******************************!*\
  !*** ./src/components/app.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appUI)
/* harmony export */ });
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardUI */ "./src/components/boardUI.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/components/header.js");
/* harmony import */ var _legendComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legendComponent */ "./src/components/legendComponent.js");
/* harmony import */ var _missBoardUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./missBoardUI */ "./src/components/missBoardUI.js");
/* harmony import */ var _popupComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popupComponent */ "./src/components/popupComponent.js");





function appUI(player) {
  document.body.innerHTML = "";
  const app = document.createElement("div");
  app.classList.add("app");
  document.body.appendChild(app);
  document.body.appendChild((0,_popupComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(player));
  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("board-container");
  app.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  app.appendChild(boardsContainer);
  boardsContainer.appendChild((0,_boardUI__WEBPACK_IMPORTED_MODULE_0__["default"])());
  boardsContainer.appendChild((0,_missBoardUI__WEBPACK_IMPORTED_MODULE_3__["default"])());
  app.appendChild((0,_legendComponent__WEBPACK_IMPORTED_MODULE_2__["default"])());
}

/***/ }),

/***/ "./src/components/boardUI.js":
/*!***********************************!*\
  !*** ./src/components/boardUI.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ boardUI)
/* harmony export */ });
function boardUI() {
  const board = document.createElement("div");
  board.classList.add("board");
  board.classList.add("game-board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const field = document.createElement("div");
      field.classList.add(`field-${i}-${j}`);
      field.classList.add("field");
      board.appendChild(field);
      field.style.backgroundColor = "transparent";
    }
  }
  return board;
}

/***/ }),

/***/ "./src/components/changeAxisButton.js":
/*!********************************************!*\
  !*** ./src/components/changeAxisButton.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeAxisButton)
/* harmony export */ });
function changeAxisButton(player) {
  const button = document.createElement("button");
  button.classList.add("rotate");
  button.textContent = `${player.direction} axis`;
  function changeAxis() {
    player.changeDirection();
    button.textContent = `${player.direction} axis`;
  }
  button.addEventListener("click", () => {
    changeAxis();
  });
  return button;
}

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
function header() {
  const headerDiv = document.createElement("div");
  headerDiv.className = "header";
  headerDiv.innerHTML = "<h1>Battleships</h1>";
  return headerDiv;
}

/***/ }),

/***/ "./src/components/legendComponent.js":
/*!*******************************************!*\
  !*** ./src/components/legendComponent.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ legendComponent)
/* harmony export */ });
function legendComponent() {
  const legend = document.createElement("div");
  legend.classList.add("legend");
  const missItem = document.createElement("div");
  const hitItem = document.createElement("div");
  const sunkItem = document.createElement("div");
  missItem.classList.add("legend-item");
  hitItem.classList.add("legend-item");
  sunkItem.classList.add("legend-item");
  const items = [missItem, hitItem, sunkItem];
  const texts = ["Miss", "Hit", "Sunk"];
  const colors = ["#85ffb3", "#ff8585", "black"];
  items.forEach((item, i) => {
    item.innerHTML = `
        <div class="legend-color" style="background-color: ${colors[i]}"></div>
        <div class="legend-text">${texts[i]}</div>
      `;
    legend.appendChild(item);
    console.log("git");
  });
  return legend;
}

/***/ }),

/***/ "./src/components/missBoardUI.js":
/*!***************************************!*\
  !*** ./src/components/missBoardUI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ missBoardUI)
/* harmony export */ });
function missBoardUI() {
  const missBoard = document.createElement("div");
  missBoard.classList.add("miss-board");
  missBoard.classList.add("board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const field = document.createElement("div");
      field.classList.add(`field-${i}-${j}`);
      field.classList.add("field");
      missBoard.appendChild(field);
    }
  }
  return missBoard;
}

/***/ }),

/***/ "./src/components/popupComponent.js":
/*!******************************************!*\
  !*** ./src/components/popupComponent.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ popupComponent)
/* harmony export */ });
/* harmony import */ var _boardUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardUI */ "./src/components/boardUI.js");
/* harmony import */ var _changeAxisButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeAxisButton */ "./src/components/changeAxisButton.js");


function popupComponent(player) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.innerHTML = `
      <h3> Place your ships </h3>
      
  `;
  popup.appendChild(popupContent);
  popupContent.appendChild((0,_changeAxisButton__WEBPACK_IMPORTED_MODULE_1__["default"])(player));
  const gameboard = (0,_boardUI__WEBPACK_IMPORTED_MODULE_0__["default"])();
  gameboard.classList.remove("game-board");
  gameboard.classList.add("popup-board");
  popupContent.appendChild(gameboard);
  return popup;
}

/***/ }),

/***/ "./src/components/resultPopup.js":
/*!***************************************!*\
  !*** ./src/components/resultPopup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resultComponent)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.js");

function resultComponent(result) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.classList.add("small");
  popupContent.innerHTML = `
        <h3> ${result} </h3>
        
    `;
  const newGameButton = document.createElement("button");
  newGameButton.textContent = "New Game";
  newGameButton.classList.add("new-game");
  newGameButton.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  popupContent.appendChild(newGameButton);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);
  return popup;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _logic_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/Player */ "./src/logic/Player.js");
/* harmony import */ var _logic_computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/computer */ "./src/logic/computer.js");
/* harmony import */ var _components_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app */ "./src/components/app.js");
/* harmony import */ var _logic_playerPutsShips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/playerPutsShips */ "./src/logic/playerPutsShips.js");
/* harmony import */ var _logic_computerPutsShips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/computerPutsShips */ "./src/logic/computerPutsShips.js");






function newGame() {
  let player = null;
  let computer = null;
  player = new _logic_Player__WEBPACK_IMPORTED_MODULE_1__["default"]();
  computer = new _logic_computer__WEBPACK_IMPORTED_MODULE_2__["default"]();
  (0,_components_app__WEBPACK_IMPORTED_MODULE_3__["default"])(player);
  (0,_logic_playerPutsShips__WEBPACK_IMPORTED_MODULE_4__["default"])(player, computer);
  (0,_logic_computerPutsShips__WEBPACK_IMPORTED_MODULE_5__["default"])(computer);
  console.log(player);
}
newGame();

/***/ }),

/***/ "./src/logic/Player.js":
/*!*****************************!*\
  !*** ./src/logic/Player.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/logic/gameboard.js");

class Player {
  constructor() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.direction = "x";
  }
  changeDirection() {
    if (this.direction === "x") this.direction = "y";else this.direction = "x";
  }
  reset() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}

/***/ }),

/***/ "./src/logic/computer.js":
/*!*******************************!*\
  !*** ./src/logic/computer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/logic/gameboard.js");

class Computer {
  constructor() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  reset() {
    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
}

/***/ }),

/***/ "./src/logic/computerAttacks.js":
/*!**************************************!*\
  !*** ./src/logic/computerAttacks.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computerAttack)
/* harmony export */ });
/* harmony import */ var _displayPlayerShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPlayerShips */ "./src/logic/displayPlayerShips.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result */ "./src/logic/result.js");


function computerAttack(player, computer) {
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
        (0,_result__WEBPACK_IMPORTED_MODULE_1__["default"])("You lost", player, computer);
        return;
      }
    } else {
      field.classList.add("miss");
    }
    break;
  }
  (0,_displayPlayerShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player, playerBoard);
}

/***/ }),

/***/ "./src/logic/computerPutsShips.js":
/*!****************************************!*\
  !*** ./src/logic/computerPutsShips.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ computerPutsShips)
/* harmony export */ });
/* harmony import */ var _displayEnemyShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayEnemyShips */ "./src/logic/displayEnemyShips.js");

function computerPutsShips(computer) {
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
      if (directionNumber === 0) direction = "x";else direction = "y";
      placed = computerBoard.placeShip(ship, x, y, direction);
    }
    index += 1;
  }
  (0,_displayEnemyShips__WEBPACK_IMPORTED_MODULE_0__["default"])(computer, gameboard);
}

/***/ }),

/***/ "./src/logic/displayEnemyShips.js":
/*!****************************************!*\
  !*** ./src/logic/displayEnemyShips.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayEnemyShips)
/* harmony export */ });
function displayEnemyShips(player, board) {
  const playerBoard = player.gameboard.board;
  playerBoard.forEach((row, i) => {
    row.forEach((field, idx) => {
      const fieldDiv = board.querySelector(`.field-${i}-${idx}`);
      if (fieldDiv) {
        if (fieldDiv.classList.contains("hit")) fieldDiv.style.backgroundColor = "#ff8585";
        if (fieldDiv.classList.contains("miss")) fieldDiv.style.backgroundColor = "#85ffb3";
        if (field !== null && field.isSunk()) {
          fieldDiv.style.backgroundColor = "black";
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/logic/displayPlayerShips.js":
/*!*****************************************!*\
  !*** ./src/logic/displayPlayerShips.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayPlayerShips)
/* harmony export */ });
function displayPlayerShips(player, board) {
  const playerBoard = player.gameboard.board;
  playerBoard.forEach((row, i) => {
    row.forEach((field, idx) => {
      const fieldDiv = board.querySelector(`.field-${i}-${idx}`);
      if (fieldDiv) {
        if (typeof field === "object" && field !== null) {
          fieldDiv.classList.add("ship");
          fieldDiv.style.backgroundColor = field.color;
        }
        if (fieldDiv.classList.contains("hit")) fieldDiv.style.backgroundColor = "#ff8585";
        if (fieldDiv.classList.contains("miss")) fieldDiv.style.backgroundColor = "#85ffb3";
        if (field !== null && field.isSunk()) {
          fieldDiv.style.backgroundColor = "black";
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/logic/gameboard.js":
/*!********************************!*\
  !*** ./src/logic/gameboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/logic/ship.js");

class Gameboard {
  constructor() {
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.ships = [new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5, "#808080"), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4, "#737373"), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "#676767"), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3, "#5c5c5c"), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2, "#525252")];
  }
  placeShip(ship, x, y, direction) {
    if (direction === "x") {
      // check if u can place ship
      if (y + ship.length <= 10) {
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[x][y + i] !== null) return false;
        }
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x][y + i] = ship;
        }
        return true;
      }
    } else if (direction === "y") {
      if (x + ship.length <= 10) {
        // check if u can place ship
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[x + i][y] !== null) return false;
        }

        // place ship and mark next to it
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = ship;
        }
        return true;
      }
    }
  }
  receiveAttack(x, y) {
    if (typeof this.board[x][y] === "object" && this.board[x][y] !== null) {
      this.board[x][y].hit();
      return true;
    }
    return false;
  }
  areAllShipsSunk() {
    const result = this.ships.filter(ship => !ship.isSunk());
    return result.length === 0;
  }
}

/***/ }),

/***/ "./src/logic/playerAttacks.js":
/*!************************************!*\
  !*** ./src/logic/playerAttacks.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerAttack)
/* harmony export */ });
/* harmony import */ var _displayEnemyShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayEnemyShips */ "./src/logic/displayEnemyShips.js");
/* harmony import */ var _computerAttacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computerAttacks */ "./src/logic/computerAttacks.js");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result */ "./src/logic/result.js");



function playerAttack(computer, player) {
  const computerBoard = document.querySelector(".miss-board");
  const fields = computerBoard.childNodes;
  const computerShips = computer.gameboard;
  fields.forEach(field => {
    field.addEventListener("click", () => {
      const {
        className
      } = field;
      const parts = className.split("-");
      const x = parseInt(parts[1], 10);
      const y = parseInt(parts[2].split(" ")[0], 10);
      if (field.classList.contains("hit") || field.classList.contains("miss")) return;
      if (computerShips.receiveAttack(x, y) === true) {
        field.classList.add("hit");
        (0,_displayEnemyShips__WEBPACK_IMPORTED_MODULE_0__["default"])(computer, computerBoard);
        if (computerShips.areAllShipsSunk()) {
          (0,_result__WEBPACK_IMPORTED_MODULE_2__["default"])("You won!", player, computer);
          return;
        }
      } else field.classList.add("miss");
      (0,_displayEnemyShips__WEBPACK_IMPORTED_MODULE_0__["default"])(computer, computerBoard);
      (0,_computerAttacks__WEBPACK_IMPORTED_MODULE_1__["default"])(player, computer);
    });
  });
}

/***/ }),

/***/ "./src/logic/playerPutsShips.js":
/*!**************************************!*\
  !*** ./src/logic/playerPutsShips.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerPutsShips)
/* harmony export */ });
/* harmony import */ var _displayPlayerShips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayPlayerShips */ "./src/logic/displayPlayerShips.js");
/* harmony import */ var _playerAttacks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerAttacks */ "./src/logic/playerAttacks.js");


let currentMouseOverFunction = null;
let currentMouseOutFunction = null;
const hoverColor = "rgb(173, 216, 230)";
function playerPutsShips(player, computer) {
  const popup = document.querySelector(".popup");
  let index = 0;
  const popupBoard = document.querySelector(".popup-board");
  const board = document.querySelector(".game-board");
  const fields = popupBoard.childNodes;
  const playerBoard = player.gameboard;
  const playerShips = playerBoard.ships;
  hoverPutting(playerBoard, player, index);
  fields.forEach(field => {
    field.addEventListener("click", () => {
      const {
        className
      } = field;
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
        (0,_displayPlayerShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player, board);
        (0,_playerAttacks__WEBPACK_IMPORTED_MODULE_1__["default"])(computer, player);
        return;
      }
      (0,_displayPlayerShips__WEBPACK_IMPORTED_MODULE_0__["default"])(player, popupBoard);
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
      if (gameboard.board[x][y] !== null || y + gameboard.ships[index].length > 10) {
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
            if (field.style.backgroundColor === "transparent") field.style.backgroundColor = hoverColor;
          }
        }
      }
    }
    if (player.direction === "y") {
      if (gameboard.board[x][y] !== null || x + gameboard.ships[index].length > 10) {
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
            if (field.style.backgroundColor === "transparent") field.style.backgroundColor = hoverColor;
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
            if (field.style.backgroundColor === hoverColor) field.style.backgroundColor = "transparent";
          }
        }
      }
    }
    if (player.direction === "y") {
      if (x + gameboard.ships[index].length <= 10) {
        for (let i = 0; i < gameboard.ships[index].length; i += 1) {
          const field = board.querySelector(`.field-${x + i}-${y}`);
          if (field !== null) {
            if (field.style.backgroundColor === hoverColor) field.style.backgroundColor = "transparent";
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
  fields.forEach(field => {
    field.addEventListener("mouseover", currentMouseOverFunction);
    field.addEventListener("mouseout", currentMouseOutFunction);
  });
}
function removeHover() {
  const board = document.querySelector(".popup-board");
  const fields = board.childNodes;
  if (currentMouseOverFunction && currentMouseOutFunction) {
    fields.forEach(field => {
      field.removeEventListener("mouseover", currentMouseOverFunction);
      field.removeEventListener("mouseout", currentMouseOutFunction);
    });
    currentMouseOverFunction = null;
    currentMouseOutFunction = null;
  }
}

/***/ }),

/***/ "./src/logic/result.js":
/*!*****************************!*\
  !*** ./src/logic/result.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_resultPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/resultPopup */ "./src/components/resultPopup.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(message, player, computer) {
  player.reset();
  computer.reset();
  (0,_components_resultPopup__WEBPACK_IMPORTED_MODULE_0__["default"])(message);
}

/***/ }),

/***/ "./src/logic/ship.js":
/*!***************************!*\
  !*** ./src/logic/ship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, color) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
    this.color = color;
  }
  isSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
      return true;
    }
    return false;
  }
  hit() {
    this.hits += 1;
    this.isSunk();
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
body button {
  color: black;
}
body .legend {
  display: flex;
  gap: 1rem;
}
body .legend .legend-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
body .legend .legend-item .legend-color {
  width: 1rem;
  height: 1rem;
  border: 1px solid #555555;
}
body .header {
  margin-top: 0.5rem;
}
body .header h1 {
  margin: 0;
  font-family: "Pirata One";
  font-size: 3rem;
  letter-spacing: 5px;
}
body .popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
}
body .popup .popup-content {
  width: 90%;
  height: 70%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  border-radius: 1rem;
}
@media (min-width: 600px) {
  body .popup .popup-content {
    width: 60%;
    height: 50%;
  }
}
@media (min-width: 1200px) {
  body .popup .popup-content {
    width: 30%;
    height: 70%;
  }
}
body .popup .popup-content h3 {
  font-size: 2rem;
  margin: 0;
  margin-top: 2rem;
}
body .popup .popup-content button {
  background-color: rgb(173, 216, 230);
  border: 0;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  font-weight: bold;
}
body .popup .popup-content button:hover {
  background-color: rgb(135, 206, 235);
  cursor: pointer;
}
body .popup .popup-content .gif {
  width: 70%;
}
body .popup .small {
  width: fit-content;
  height: fit-content;
  padding: 5rem;
}
@media (min-width: 600px) {
  body .popup .small {
    padding: 10rem;
  }
}
body .app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.7rem;
  background-color: #dddddd;
}
@media (min-width: 600px) {
  body .app {
    gap: 2rem;
  }
}
@media (min-width: 1200px) {
  body .app {
    gap: 3rem;
  }
}

.board-container {
  display: flex;
  width: 90%;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media (min-width: 600px) {
  .board-container {
    width: 60%;
    gap: 4rem;
  }
}
@media (min-width: 1200px) {
  .board-container {
    flex-direction: row;
  }
}
@media (min-width: 1200px) {
  .board-container {
    width: 70%;
  }
}
.board-container .board {
  display: grid;
  border: 1px solid #555555;
  grid-template-columns: repeat(10, 1fr);
  width: 85%;
  aspect-ratio: 1/1;
}
.board-container .board .field {
  border: 1px solid #555555;
}
.board-container .board .sunk {
  border: none;
}
.board-container .miss-board .field {
  background-color: transparent;
}
.board-container .miss-board .field:hover {
  background-color: #cccccc;
}

.popup-board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  width: 65%;
  aspect-ratio: 1/1;
  border: 1px solid #555555;
}
@media (min-width: 600px) {
  .popup-board {
    width: 75%;
  }
}
.popup-board .field {
  border: 1px solid #555555;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EAIE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,mJAAA;AAFF;AAPE;EACE,YAAA;AASJ;AACE;EACE,aAAA;EACA,SAAA;AACJ;AAAI;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AAEN;AADM;EACE,WAAA;EACA,YAAA;EACA,yBAAA;AAGR;AACE;EACE,kBAAA;AACJ;AAAI;EACE,SAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AAEN;AACE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;AACJ;AAAI;EACE,UAAA;EACA,WAAA;EACA,yBAAA;EACA,aAAA;EAEA,mBAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;AACN;AACM;EAZF;IAaI,UAAA;IACA,WAAA;EAEN;AACF;AADM;EAhBF;IAiBI,UAAA;IACA,WAAA;EAIN;AACF;AAHM;EACE,eAAA;EACA,SAAA;EACA,gBAAA;AAKR;AAHM;EACE,oCAAA;EACA,SAAA;EACA,oBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;AAKR;AAHM;EACE,oCAAA;EACA,eAAA;AAKR;AAHM;EACE,UAAA;AAKR;AAFI;EACE,kBAAA;EACA,mBAAA;EACA,aAAA;AAIN;AAHM;EAJF;IAKI,cAAA;EAMN;AACF;AAHE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,WAAA;EACA,yBAAA;AAKJ;AAJI;EATF;IAUI,SAAA;EAOJ;AACF;AANI;EAZF;IAaI,SAAA;EASJ;AACF;;AANA;EACE,aAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AASF;AAPE;EARF;IASI,UAAA;IACA,SAAA;EAUF;AACF;AATE;EAZF;IAaI,mBAAA;EAYF;AACF;AAXE;EAfF;IAgBI,UAAA;EAcF;AACF;AAZE;EACE,aAAA;EACA,yBAAA;EACA,sCAAA;EACA,UAAA;EACA,iBAAA;AAcJ;AAbI;EACE,yBAAA;AAeN;AAbI;EACE,YAAA;AAeN;AAXI;EACE,6BAAA;AAaN;AAXI;EACE,yBAAA;AAaN;;AATA;EACE,aAAA;EACA,sCAAA;EACA,UAAA;EACA,iBAAA;EACA,yBAAA;AAYF;AAXE;EANF;IAOI,UAAA;EAcF;AACF;AAbE;EACE,yBAAA;AAeJ","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFN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QTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9ib2FyZFVJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL2NoYW5nZUF4aXNCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL2xlZ2VuZENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9taXNzQm9hcmRVSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9wb3B1cENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9yZXN1bHRQb3B1cC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL1BsYXllci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvY29tcHV0ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL2NvbXB1dGVyQXR0YWNrcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvY29tcHV0ZXJQdXRzU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL2Rpc3BsYXlFbmVteVNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9kaXNwbGF5UGxheWVyU2hpcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvcGxheWVyQXR0YWNrcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvcGxheWVyUHV0c1NoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBib2FyZFVJIGZyb20gXCIuL2JvYXJkVUlcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgbGVnZW5kQ29tcG9uZW50IGZyb20gXCIuL2xlZ2VuZENvbXBvbmVudFwiO1xuaW1wb3J0IG1pc3NCb2FyZFVJIGZyb20gXCIuL21pc3NCb2FyZFVJXCI7XG5pbXBvcnQgcG9wdXBDb21wb25lbnQgZnJvbSBcIi4vcG9wdXBDb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwVUkocGxheWVyKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXBwLmNsYXNzTGlzdC5hZGQoXCJhcHBcIik7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cENvbXBvbmVudChwbGF5ZXIpKTtcbiAgY29uc3QgYm9hcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9hcmRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1jb250YWluZXJcIik7XG4gIGFwcC5hcHBlbmRDaGlsZChoZWFkZXIoKSk7XG5cbiAgYXBwLmFwcGVuZENoaWxkKGJvYXJkc0NvbnRhaW5lcik7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZFVJKCkpO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQobWlzc0JvYXJkVUkoKSk7XG4gIGFwcC5hcHBlbmRDaGlsZChsZWdlbmRDb21wb25lbnQoKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib2FyZFVJKCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImdhbWUtYm9hcmRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChgZmllbGQtJHtpfS0ke2p9YCk7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGRcIik7XG4gICAgICBib2FyZC5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBib2FyZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYW5nZUF4aXNCdXR0b24ocGxheWVyKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicm90YXRlXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZGlyZWN0aW9ufSBheGlzYDtcblxuICBmdW5jdGlvbiBjaGFuZ2VBeGlzKCkge1xuICAgIHBsYXllci5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHtwbGF5ZXIuZGlyZWN0aW9ufSBheGlzYDtcbiAgfVxuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUF4aXMoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ1dHRvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyRGl2LmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG4gIGhlYWRlckRpdi5pbm5lckhUTUwgPSBcIjxoMT5CYXR0bGVzaGlwczwvaDE+XCI7XG4gIHJldHVybiBoZWFkZXJEaXY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWdlbmRDb21wb25lbnQoKSB7XG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKFwibGVnZW5kXCIpO1xuXG4gIGNvbnN0IG1pc3NJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGl0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1bmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBtaXNzSXRlbS5jbGFzc0xpc3QuYWRkKFwibGVnZW5kLWl0ZW1cIik7XG4gIGhpdEl0ZW0uY2xhc3NMaXN0LmFkZChcImxlZ2VuZC1pdGVtXCIpO1xuICBzdW5rSXRlbS5jbGFzc0xpc3QuYWRkKFwibGVnZW5kLWl0ZW1cIik7XG5cbiAgY29uc3QgaXRlbXMgPSBbbWlzc0l0ZW0sIGhpdEl0ZW0sIHN1bmtJdGVtXTtcbiAgY29uc3QgdGV4dHMgPSBbXCJNaXNzXCIsIFwiSGl0XCIsIFwiU3Vua1wiXTtcbiAgY29uc3QgY29sb3JzID0gW1wiIzg1ZmZiM1wiLCBcIiNmZjg1ODVcIiwgXCJibGFja1wiXTtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWNvbG9yXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yc1tpXX1cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC10ZXh0XCI+JHt0ZXh0c1tpXX08L2Rpdj5cbiAgICAgIGA7XG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKFwiZ2l0XCIpO1xuICB9KTtcblxuICByZXR1cm4gbGVnZW5kO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlzc0JvYXJkVUkoKSB7XG4gIGNvbnN0IG1pc3NCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pc3NCb2FyZC5jbGFzc0xpc3QuYWRkKFwibWlzcy1ib2FyZFwiKTtcbiAgbWlzc0JvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGBmaWVsZC0ke2l9LSR7an1gKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmaWVsZFwiKTtcbiAgICAgIG1pc3NCb2FyZC5hcHBlbmRDaGlsZChmaWVsZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtaXNzQm9hcmQ7XG59XG4iLCJpbXBvcnQgYm9hcmRVSSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5pbXBvcnQgY2hhbmdlQXhpc0J1dHRvbiBmcm9tIFwiLi9jaGFuZ2VBeGlzQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVwQ29tcG9uZW50KHBsYXllcikge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcbiAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wdXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1jb250ZW50XCIpO1xuICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgPGgzPiBQbGFjZSB5b3VyIHNoaXBzIDwvaDM+XG4gICAgICBcbiAgYDtcblxuICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cENvbnRlbnQpO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoY2hhbmdlQXhpc0J1dHRvbihwbGF5ZXIpKTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gYm9hcmRVSSgpO1xuICBnYW1lYm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImdhbWUtYm9hcmRcIik7XG4gIGdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtYm9hcmRcIik7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChnYW1lYm9hcmQpO1xuICByZXR1cm4gcG9wdXA7XG59XG4iLCJpbXBvcnQgbmV3R2FtZSBmcm9tIFwiLi4vaW5kZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzdWx0Q29tcG9uZW50KHJlc3VsdCkge1xuICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcbiAgY29uc3QgcG9wdXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcG9wdXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1jb250ZW50XCIpO1xuICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInNtYWxsXCIpO1xuICBwb3B1cENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8aDM+ICR7cmVzdWx0fSA8L2gzPlxuICAgICAgICBcbiAgICBgO1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbmV3R2FtZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IEdhbWVcIjtcbiAgbmV3R2FtZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmV3LWdhbWVcIik7XG5cbiAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5ld0dhbWUoKTtcbiAgfSk7XG4gIHBvcHVwQ29udGVudC5hcHBlbmRDaGlsZChuZXdHYW1lQnV0dG9uKTtcbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwKTtcbiAgcmV0dXJuIHBvcHVwO1xufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vbG9naWMvUGxheWVyXCI7XG5pbXBvcnQgQ29tcHV0ZXIgZnJvbSBcIi4vbG9naWMvY29tcHV0ZXJcIjtcbmltcG9ydCBhcHBVSSBmcm9tIFwiLi9jb21wb25lbnRzL2FwcFwiO1xuaW1wb3J0IHBsYXllclB1dHNTaGlwcyBmcm9tIFwiLi9sb2dpYy9wbGF5ZXJQdXRzU2hpcHNcIjtcbmltcG9ydCBjb21wdXRlclB1dHNTaGlwcyBmcm9tIFwiLi9sb2dpYy9jb21wdXRlclB1dHNTaGlwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdHYW1lKCkge1xuICBsZXQgcGxheWVyID0gbnVsbDtcbiAgbGV0IGNvbXB1dGVyID0gbnVsbDtcbiAgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICBjb21wdXRlciA9IG5ldyBDb21wdXRlcigpO1xuICBhcHBVSShwbGF5ZXIpO1xuICBwbGF5ZXJQdXRzU2hpcHMocGxheWVyLCBjb21wdXRlcik7XG4gIGNvbXB1dGVyUHV0c1NoaXBzKGNvbXB1dGVyKTtcbiAgY29uc29sZS5sb2cocGxheWVyKTtcbn1cbm5ld0dhbWUoKTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gXCJ4XCI7XG4gIH1cblxuICBjaGFuZ2VEaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInhcIikgdGhpcy5kaXJlY3Rpb24gPSBcInlcIjtcbiAgICBlbHNlIHRoaXMuZGlyZWN0aW9uID0gXCJ4XCI7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcHV0ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheVBsYXllclNoaXBzIGZyb20gXCIuL2Rpc3BsYXlQbGF5ZXJTaGlwc1wiO1xuaW1wb3J0IGVuZEdhbWUgZnJvbSBcIi4vcmVzdWx0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKHBsYXllciwgY29tcHV0ZXIpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYm9hcmRcIik7XG5cbiAgY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IGZpZWxkID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7eH0tJHt5fWApO1xuICAgIGlmIChmaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikgfHwgZmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzc1wiKSkge1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJTaGlwcy5yZWNlaXZlQXR0YWNrKHgsIHkpID09PSB0cnVlKSB7XG4gICAgICAvLyBjaGFuZ2VkIGVsc2UgdG8gZWxzZSBpZlxuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgIGlmIChwbGF5ZXJTaGlwcy5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICBlbmRHYW1lKFwiWW91IGxvc3RcIiwgcGxheWVyLCBjb21wdXRlcik7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICB9XG4gICAgYnJlYWs7XG4gIH1cblxuICBkaXNwbGF5UGxheWVyU2hpcHMocGxheWVyLCBwbGF5ZXJCb2FyZCk7XG59XG4iLCJpbXBvcnQgZGlzcGxheVNoaXBzIGZyb20gXCIuL2Rpc3BsYXlFbmVteVNoaXBzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXB1dGVyUHV0c1NoaXBzKGNvbXB1dGVyKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzcy1ib2FyZFwiKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyLmdhbWVib2FyZDtcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IGNvbXB1dGVyQm9hcmQuc2hpcHM7XG5cbiAgd2hpbGUgKGluZGV4IDwgY29tcHV0ZXJTaGlwcy5sZW5ndGgpIHtcbiAgICBjb25zdCBzaGlwID0gY29tcHV0ZXJTaGlwc1tpbmRleF07XG4gICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgIHdoaWxlIChwbGFjZWQgIT09IHRydWUpIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgZGlyZWN0aW9uTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBsZXQgZGlyZWN0aW9uO1xuICAgICAgaWYgKGRpcmVjdGlvbk51bWJlciA9PT0gMCkgZGlyZWN0aW9uID0gXCJ4XCI7XG4gICAgICBlbHNlIGRpcmVjdGlvbiA9IFwieVwiO1xuICAgICAgcGxhY2VkID0gY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpbmRleCArPSAxO1xuICB9XG5cbiAgZGlzcGxheVNoaXBzKGNvbXB1dGVyLCBnYW1lYm9hcmQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUVuZW15U2hpcHMocGxheWVyLCBib2FyZCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgcGxheWVyQm9hcmQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgcm93LmZvckVhY2goKGZpZWxkLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkRGl2ID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7aX0tJHtpZHh9YCk7XG4gICAgICBpZiAoZmllbGREaXYpIHtcbiAgICAgICAgaWYgKGZpZWxkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSlcbiAgICAgICAgICBmaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjg1ODVcIjtcbiAgICAgICAgaWYgKGZpZWxkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpXG4gICAgICAgICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODVmZmIzXCI7XG4gICAgICAgIGlmIChmaWVsZCAhPT0gbnVsbCAmJiBmaWVsZC5pc1N1bmsoKSkge1xuICAgICAgICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJTaGlwcyhwbGF5ZXIsIGJvYXJkKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZC5ib2FyZDtcblxuICBwbGF5ZXJCb2FyZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoZmllbGQsIGlkeCkgPT4ge1xuICAgICAgY29uc3QgZmllbGREaXYgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuZmllbGQtJHtpfS0ke2lkeH1gKTtcbiAgICAgIGlmIChmaWVsZERpdikge1xuICAgICAgICBpZiAodHlwZW9mIGZpZWxkID09PSBcIm9iamVjdFwiICYmIGZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICAgICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZmllbGQuY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpZWxkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSlcbiAgICAgICAgICBmaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjg1ODVcIjtcbiAgICAgICAgaWYgKGZpZWxkRGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpXG4gICAgICAgICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODVmZmIzXCI7XG4gICAgICAgIGlmIChmaWVsZCAhPT0gbnVsbCAmJiBmaWVsZC5pc1N1bmsoKSkge1xuICAgICAgICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwKVxuICAgICAgLmZpbGwobnVsbClcbiAgICAgIC5tYXAoKCkgPT4gQXJyYXkoMTApLmZpbGwobnVsbCkpO1xuICAgIHRoaXMuc2hpcHMgPSBbXG4gICAgICBuZXcgU2hpcCg1LCBcIiM4MDgwODBcIiksXG4gICAgICBuZXcgU2hpcCg0LCBcIiM3MzczNzNcIiksXG4gICAgICBuZXcgU2hpcCgzLCBcIiM2NzY3NjdcIiksXG4gICAgICBuZXcgU2hpcCgzLCBcIiM1YzVjNWNcIiksXG4gICAgICBuZXcgU2hpcCgyLCBcIiM1MjUyNTJcIiksXG4gICAgXTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCB4LCB5LCBkaXJlY3Rpb24pIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgLy8gY2hlY2sgaWYgdSBjYW4gcGxhY2Ugc2hpcFxuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4XVt5ICsgaV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeF1beSArIGldID0gc2hpcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInlcIikge1xuICAgICAgaWYgKHggKyBzaGlwLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICAvLyBjaGVjayBpZiB1IGNhbiBwbGFjZSBzaGlwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3ggKyBpXVt5XSAhPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGxhY2Ugc2hpcCBhbmQgbWFyayBuZXh0IHRvIGl0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFt4XVt5XSA9PT0gXCJvYmplY3RcIiAmJiB0aGlzLmJvYXJkW3hdW3ldICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldLmhpdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGFyZUFsbFNoaXBzU3VuaygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gIXNoaXAuaXNTdW5rKCkpO1xuICAgIHJldHVybiByZXN1bHQubGVuZ3RoID09PSAwO1xuICB9XG59XG4iLCJpbXBvcnQgZGlzcGxheUVuZW15U2hpcHMgZnJvbSBcIi4vZGlzcGxheUVuZW15U2hpcHNcIjtcbmltcG9ydCBjb21wdXRlckF0dGFjayBmcm9tIFwiLi9jb21wdXRlckF0dGFja3NcIjtcbmltcG9ydCBlbmRHYW1lIGZyb20gXCIuL3Jlc3VsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5ZXJBdHRhY2soY29tcHV0ZXIsIHBsYXllcikge1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5taXNzLWJvYXJkXCIpO1xuXG4gIGNvbnN0IGZpZWxkcyA9IGNvbXB1dGVyQm9hcmQuY2hpbGROb2RlcztcbiAgY29uc3QgY29tcHV0ZXJTaGlwcyA9IGNvbXB1dGVyLmdhbWVib2FyZDtcblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IGZpZWxkO1xuICAgICAgY29uc3QgcGFydHMgPSBjbGFzc05hbWUuc3BsaXQoXCItXCIpO1xuICAgICAgY29uc3QgeCA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQocGFydHNbMl0uc3BsaXQoXCIgXCIpWzBdLCAxMCk7XG4gICAgICBpZiAoZmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8IGZpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChjb21wdXRlclNoaXBzLnJlY2VpdmVBdHRhY2soeCwgeSkgPT09IHRydWUpIHtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgZGlzcGxheUVuZW15U2hpcHMoY29tcHV0ZXIsIGNvbXB1dGVyQm9hcmQpO1xuICAgICAgICBpZiAoY29tcHV0ZXJTaGlwcy5hcmVBbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgIGVuZEdhbWUoXCJZb3Ugd29uIVwiLCBwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmaWVsZC5jbGFzc0xpc3QuYWRkKFwibWlzc1wiKTtcbiAgICAgIGRpc3BsYXlFbmVteVNoaXBzKGNvbXB1dGVyLCBjb21wdXRlckJvYXJkKTtcbiAgICAgIGNvbXB1dGVyQXR0YWNrKHBsYXllciwgY29tcHV0ZXIpO1xuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBkaXNwbGF5UGxheWVyU2hpcHMgZnJvbSBcIi4vZGlzcGxheVBsYXllclNoaXBzXCI7XG5pbXBvcnQgcGxheWVyQXR0YWNrIGZyb20gXCIuL3BsYXllckF0dGFja3NcIjtcblxubGV0IGN1cnJlbnRNb3VzZU92ZXJGdW5jdGlvbiA9IG51bGw7XG5sZXQgY3VycmVudE1vdXNlT3V0RnVuY3Rpb24gPSBudWxsO1xuXG5jb25zdCBob3ZlckNvbG9yID0gXCJyZ2IoMTczLCAyMTYsIDIzMClcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyUHV0c1NoaXBzKHBsYXllciwgY29tcHV0ZXIpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwXCIpO1xuXG4gIGxldCBpbmRleCA9IDA7XG4gIGNvbnN0IHBvcHVwQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWJvYXJkXCIpO1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1ib2FyZFwiKTtcblxuICBjb25zdCBmaWVsZHMgPSBwb3B1cEJvYXJkLmNoaWxkTm9kZXM7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkO1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IHBsYXllckJvYXJkLnNoaXBzO1xuXG4gIGhvdmVyUHV0dGluZyhwbGF5ZXJCb2FyZCwgcGxheWVyLCBpbmRleCk7XG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHBhcnRzID0gY2xhc3NOYW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KHBhcnRzWzJdLnNwbGl0KFwiIFwiKVswXSwgMTApO1xuICAgICAgY29uc3Qgc2hpcCA9IHBsYXllclNoaXBzW2luZGV4XTtcblxuICAgICAgaWYgKHBsYXllckJvYXJkLnBsYWNlU2hpcChzaGlwLCB4LCB5LCBwbGF5ZXIuZGlyZWN0aW9uKSkge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICByZW1vdmVIb3ZlcigpO1xuICAgICAgICBob3ZlclB1dHRpbmcocGxheWVyQm9hcmQsIHBsYXllciwgaW5kZXgpO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ID09PSA1KSB7XG4gICAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgZGlzcGxheVBsYXllclNoaXBzKHBsYXllciwgYm9hcmQpO1xuICAgICAgICBwbGF5ZXJBdHRhY2soY29tcHV0ZXIsIHBsYXllcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZGlzcGxheVBsYXllclNoaXBzKHBsYXllciwgcG9wdXBCb2FyZCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU92ZXIoZ2FtZWJvYXJkLCBwbGF5ZXIsIGluZGV4KSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib2FyZFwiKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlLmN1cnNvciA9IFwiYXV0b1wiO1xuXG4gICAgY29uc3QgeCA9IHBhcnNlSW50KHRoaXMuY2xhc3NOYW1lLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KHRoaXMuY2xhc3NOYW1lLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuXG4gICAgaWYgKHBsYXllci5kaXJlY3Rpb24gPT09IFwieFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFt4XVt5XSAhPT0gbnVsbCB8fFxuICAgICAgICB5ICsgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGggPiAxMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeSArIGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgIC8vIGNoZWNraW4gaWYgdSBjYW4gcGxhY2Ugc2hpcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3hdW3kgKyBpXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhvdmVyaW5nIG92ZXIgZmllbGRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7eH0tJHt5ICsgaX1gKTtcblxuICAgICAgICAgIGlmIChmaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBob3ZlckNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGxheWVyLmRpcmVjdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW3hdW3ldICE9PSBudWxsIHx8XG4gICAgICAgIHggKyBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aCA+IDEwXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh4ICsgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGggPD0gMTApIHtcbiAgICAgICAgLy8gY2hlY2tpbiBpZiB1IGNhbiBwbGFjZSBzaGlwXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeCArIGldW3ldICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaG92ZXJpbmcgb3ZlciBmaWVsZHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgZmllbGQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuZmllbGQtJHt4ICsgaX0tJHt5fWApO1xuXG4gICAgICAgICAgaWYgKGZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBcInRyYW5zcGFyZW50XCIpXG4gICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGhvdmVyQ29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gaGFuZGxlTW91c2VPdXQoZ2FtZWJvYXJkLCBwbGF5ZXIsIGluZGV4KSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib2FyZFwiKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB4ID0gcGFyc2VJbnQodGhpcy5jbGFzc05hbWUuc3BsaXQoXCItXCIpWzFdKTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQodGhpcy5jbGFzc05hbWUuc3BsaXQoXCItXCIpWzJdLnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgICBpZiAodGhpcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgIT09IGhvdmVyQ29sb3IpIHJldHVybjtcblxuICAgIGlmIChwbGF5ZXIuZGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgaWYgKHkgKyBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC0ke3h9LSR7eSArIGl9YCk7XG5cbiAgICAgICAgICBpZiAoZmllbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IGhvdmVyQ29sb3IpXG4gICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXllci5kaXJlY3Rpb24gPT09IFwieVwiKSB7XG4gICAgICBpZiAoeCArIGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7eCArIGl9LSR7eX1gKTtcblxuICAgICAgICAgIGlmIChmaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gaG92ZXJDb2xvcilcbiAgICAgICAgICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaG92ZXJQdXR0aW5nKGdhbWVib2FyZCwgcGxheWVyLCBpbmRleCkge1xuICBpZiAoaW5kZXggPT09IDUpIHJldHVybjtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwLWJvYXJkXCIpO1xuICBjb25zdCBmaWVsZHMgPSBib2FyZC5jaGlsZE5vZGVzO1xuXG4gIGN1cnJlbnRNb3VzZU92ZXJGdW5jdGlvbiA9IGhhbmRsZU1vdXNlT3ZlcihnYW1lYm9hcmQsIHBsYXllciwgaW5kZXgpO1xuICBjdXJyZW50TW91c2VPdXRGdW5jdGlvbiA9IGhhbmRsZU1vdXNlT3V0KGdhbWVib2FyZCwgcGxheWVyLCBpbmRleCk7XG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgY3VycmVudE1vdXNlT3ZlckZ1bmN0aW9uKTtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY3VycmVudE1vdXNlT3V0RnVuY3Rpb24pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSG92ZXIoKSB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib2FyZFwiKTtcbiAgY29uc3QgZmllbGRzID0gYm9hcmQuY2hpbGROb2RlcztcbiAgaWYgKGN1cnJlbnRNb3VzZU92ZXJGdW5jdGlvbiAmJiBjdXJyZW50TW91c2VPdXRGdW5jdGlvbikge1xuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgZmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBjdXJyZW50TW91c2VPdmVyRnVuY3Rpb24pO1xuICAgICAgZmllbGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGN1cnJlbnRNb3VzZU91dEZ1bmN0aW9uKTtcbiAgICB9KTtcbiAgICBjdXJyZW50TW91c2VPdmVyRnVuY3Rpb24gPSBudWxsO1xuICAgIGN1cnJlbnRNb3VzZU91dEZ1bmN0aW9uID0gbnVsbDtcbiAgfVxufVxuIiwiaW1wb3J0IHJlc3VsdFBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL3Jlc3VsdFBvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChtZXNzYWdlLCBwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gIHBsYXllci5yZXNldCgpO1xuICBjb21wdXRlci5yZXNldCgpO1xuICByZXN1bHRQb3B1cChtZXNzYWdlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIGNvbG9yKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdHMpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0cyArPSAxO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuYm9keSBidXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG59XG5ib2R5IC5sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5ib2R5IC5sZWdlbmQgLmxlZ2VuZC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5IC5sZWdlbmQgLmxlZ2VuZC1pdGVtIC5sZWdlbmQtY29sb3Ige1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xufVxuYm9keSAuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuYm9keSAuaGVhZGVyIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogXCJQaXJhdGEgT25lXCI7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbmJvZHkgLnBvcHVwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuYm9keSAucG9wdXAgLnBvcHVwLWNvbnRlbnQge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAucG9wdXAgLnBvcHVwLWNvbnRlbnQge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgYm9keSAucG9wdXAgLnBvcHVwLWNvbnRlbnQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gIH1cbn1cbmJvZHkgLnBvcHVwIC5wb3B1cC1jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5ib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTczLCAyMTYsIDIzMCk7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYm9keSAucG9wdXAgLnBvcHVwLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNSwgMjA2LCAyMzUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5ib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCAuZ2lmIHtcbiAgd2lkdGg6IDcwJTtcbn1cbmJvZHkgLnBvcHVwIC5zbWFsbCB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgcGFkZGluZzogNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IC5wb3B1cCAuc21hbGwge1xuICAgIHBhZGRpbmc6IDEwcmVtO1xuICB9XG59XG5ib2R5IC5hcHAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjdyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAuYXBwIHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgYm9keSAuYXBwIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBnYXA6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICB3aWR0aDogODUlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC5maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59XG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCAuc3VuayB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib2FyZC1jb250YWluZXIgLm1pc3MtYm9hcmQgLmZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYm9hcmQtY29udGFpbmVyIC5taXNzLWJvYXJkIC5maWVsZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi5wb3B1cC1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICB3aWR0aDogNjUlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTU1NTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAucG9wdXAtYm9hcmQge1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbn1cbi5wb3B1cC1ib2FyZCAuZmllbGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1NTU1O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFJRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1KQUFBO0FBRkY7QUFQRTtFQUNFLFlBQUE7QUFTSjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVOO0FBRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBR1I7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNOO0FBQ007RUFaRjtJQWFJLFVBQUE7SUFDQSxXQUFBO0VBRU47QUFDRjtBQURNO0VBaEJGO0lBaUJJLFVBQUE7SUFDQSxXQUFBO0VBSU47QUFDRjtBQUhNO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUtSO0FBSE07RUFDRSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUtSO0FBSE07RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUFLUjtBQUhNO0VBQ0UsVUFBQTtBQUtSO0FBRkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUlOO0FBSE07RUFKRjtJQUtJLGNBQUE7RUFNTjtBQUNGO0FBSEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFLSjtBQUpJO0VBVEY7SUFVSSxTQUFBO0VBT0o7QUFDRjtBQU5JO0VBWkY7SUFhSSxTQUFBO0VBU0o7QUFDRjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVNGO0FBUEU7RUFSRjtJQVNJLFVBQUE7SUFDQSxTQUFBO0VBVUY7QUFDRjtBQVRFO0VBWkY7SUFhSSxtQkFBQTtFQVlGO0FBQ0Y7QUFYRTtFQWZGO0lBZ0JJLFVBQUE7RUFjRjtBQUNGO0FBWkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQWNKO0FBYkk7RUFDRSx5QkFBQTtBQWVOO0FBYkk7RUFDRSxZQUFBO0FBZU47QUFYSTtFQUNFLDZCQUFBO0FBYU47QUFYSTtFQUNFLHlCQUFBO0FBYU47O0FBVEE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQVlGO0FBWEU7RUFORjtJQU9JLFVBQUE7RUFjRjtBQUNGO0FBYkU7RUFDRSx5QkFBQTtBQWVKXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJib2FyZFVJIiwiaGVhZGVyIiwibGVnZW5kQ29tcG9uZW50IiwibWlzc0JvYXJkVUkiLCJwb3B1cENvbXBvbmVudCIsImFwcFVJIiwicGxheWVyIiwiZG9jdW1lbnQiLCJib2R5IiwiaW5uZXJIVE1MIiwiYXBwIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiYm9hcmRzQ29udGFpbmVyIiwiYm9hcmQiLCJpIiwiaiIsImZpZWxkIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VBeGlzQnV0dG9uIiwiYnV0dG9uIiwidGV4dENvbnRlbnQiLCJkaXJlY3Rpb24iLCJjaGFuZ2VBeGlzIiwiY2hhbmdlRGlyZWN0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlckRpdiIsImNsYXNzTmFtZSIsImxlZ2VuZCIsIm1pc3NJdGVtIiwiaGl0SXRlbSIsInN1bmtJdGVtIiwiaXRlbXMiLCJ0ZXh0cyIsImNvbG9ycyIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsImxvZyIsIm1pc3NCb2FyZCIsInBvcHVwIiwicG9wdXBDb250ZW50IiwiZ2FtZWJvYXJkIiwicmVtb3ZlIiwibmV3R2FtZSIsInJlc3VsdENvbXBvbmVudCIsInJlc3VsdCIsIm5ld0dhbWVCdXR0b24iLCJQbGF5ZXIiLCJDb21wdXRlciIsInBsYXllclB1dHNTaGlwcyIsImNvbXB1dGVyUHV0c1NoaXBzIiwiY29tcHV0ZXIiLCJHYW1lYm9hcmQiLCJjb25zdHJ1Y3RvciIsInJlc2V0IiwiZGlzcGxheVBsYXllclNoaXBzIiwiZW5kR2FtZSIsImNvbXB1dGVyQXR0YWNrIiwicGxheWVyQm9hcmQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWVyU2hpcHMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsImNvbnRhaW5zIiwicmVjZWl2ZUF0dGFjayIsImFyZUFsbFNoaXBzU3VuayIsImRpc3BsYXlTaGlwcyIsImluZGV4IiwiY29tcHV0ZXJCb2FyZCIsImNvbXB1dGVyU2hpcHMiLCJzaGlwcyIsImxlbmd0aCIsInNoaXAiLCJwbGFjZWQiLCJkaXJlY3Rpb25OdW1iZXIiLCJwbGFjZVNoaXAiLCJkaXNwbGF5RW5lbXlTaGlwcyIsInJvdyIsImlkeCIsImZpZWxkRGl2IiwiaXNTdW5rIiwiY29sb3IiLCJTaGlwIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaGl0IiwiZmlsdGVyIiwicGxheWVyQXR0YWNrIiwiZmllbGRzIiwiY2hpbGROb2RlcyIsInBhcnRzIiwic3BsaXQiLCJwYXJzZUludCIsImN1cnJlbnRNb3VzZU92ZXJGdW5jdGlvbiIsImN1cnJlbnRNb3VzZU91dEZ1bmN0aW9uIiwiaG92ZXJDb2xvciIsInBvcHVwQm9hcmQiLCJob3ZlclB1dHRpbmciLCJyZW1vdmVIb3ZlciIsImRpc3BsYXkiLCJoYW5kbGVNb3VzZU92ZXIiLCJjdXJzb3IiLCJoYW5kbGVNb3VzZU91dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXN1bHRQb3B1cCIsIm1lc3NhZ2UiLCJzdW5rIiwiaGl0cyJdLCJzb3VyY2VSb290IjoiIn0=