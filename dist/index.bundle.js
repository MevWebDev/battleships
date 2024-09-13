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
  margin: 0;
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
  height: 60%;
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
  gap: 2rem;
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
  width: 340px;
  height: 340px;
  border: 1px solid #555555;
}
@media (min-width: 600px) {
  .popup-board {
    width: 440px;
    height: 440px;
  }
}
.popup-board .field {
  border: 1px solid #555555;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,UAAA;EACA,mJAAA;AACF;AACE;EACE,aAAA;EACA,SAAA;AACJ;AAAI;EACE,aAAA;EACA,WAAA;EACA,mBAAA;AAEN;AADM;EACE,WAAA;EACA,YAAA;EACA,yBAAA;AAGR;AACE;EACE,SAAA;AACJ;AAAI;EACE,SAAA;EACA,yBAAA;EACA,eAAA;EACA,mBAAA;AAEN;AACE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oCAAA;EACA,kBAAA;AACJ;AAAI;EACE,UAAA;EACA,WAAA;EACA,yBAAA;EACA,aAAA;EAEA,mBAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;AACN;AACM;EAZF;IAaI,UAAA;IACA,WAAA;EAEN;AACF;AADM;EAhBF;IAiBI,UAAA;IACA,WAAA;EAIN;AACF;AAHM;EACE,eAAA;EACA,SAAA;EACA,gBAAA;AAKR;AAHM;EACE,oCAAA;EACA,SAAA;EACA,oBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;AAKR;AAHM;EACE,oCAAA;EACA,eAAA;AAKR;AAHM;EACE,UAAA;AAKR;AAFI;EACE,kBAAA;EACA,mBAAA;EACA,aAAA;AAIN;AAHM;EAJF;IAKI,cAAA;EAMN;AACF;AAHE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,sBAAA;EACA,SAAA;EACA,yBAAA;AAKJ;AAJI;EATF;IAUI,SAAA;EAOJ;AACF;AANI;EAZF;IAaI,SAAA;EASJ;AACF;;AANA;EACE,aAAA;EACA,UAAA;EACA,SAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AASF;AAPE;EARF;IASI,UAAA;IACA,SAAA;EAUF;AACF;AATE;EAZF;IAaI,mBAAA;EAYF;AACF;AAXE;EAfF;IAgBI,UAAA;EAcF;AACF;AAZE;EACE,aAAA;EACA,yBAAA;EACA,sCAAA;EACA,UAAA;EACA,iBAAA;AAcJ;AAbI;EACE,yBAAA;AAeN;AAbI;EACE,YAAA;AAeN;AAXI;EACE,6BAAA;AAaN;AAXI;EACE,yBAAA;AAaN;;AATA;EACE,aAAA;EACA,sCAAA;EACA,YAAA;EACA,aAAA;EACA,yBAAA;AAYF;AAXE;EANF;IAOI,YAAA;IACA,aAAA;EAcF;AACF;AAbE;EACE,yBAAA;AAeJ","sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFX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QUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9hcHAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvYm9hcmRVSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9jaGFuZ2VBeGlzQnV0dG9uLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvY29tcG9uZW50cy9sZWdlbmRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvbWlzc0JvYXJkVUkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvcG9wdXBDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2NvbXBvbmVudHMvcmVzdWx0UG9wdXAuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL2NvbXB1dGVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9jb21wdXRlckF0dGFja3MuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL2NvbXB1dGVyUHV0c1NoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9kaXNwbGF5RW5lbXlTaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvZGlzcGxheVBsYXllclNoaXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL3BsYXllckF0dGFja3MuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL2xvZ2ljL3BsYXllclB1dHNTaGlwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9zcmMvbG9naWMvcmVzdWx0LmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9sb2dpYy9zaGlwLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1lc2xpbnQtcHJldHRpZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RlbXBsYXRlLWVzbGludC1wcmV0dGllci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtZXNsaW50LXByZXR0aWVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYm9hcmRVSSBmcm9tIFwiLi9ib2FyZFVJXCI7XG5pbXBvcnQgaGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGxlZ2VuZENvbXBvbmVudCBmcm9tIFwiLi9sZWdlbmRDb21wb25lbnRcIjtcbmltcG9ydCBtaXNzQm9hcmRVSSBmcm9tIFwiLi9taXNzQm9hcmRVSVwiO1xuaW1wb3J0IHBvcHVwQ29tcG9uZW50IGZyb20gXCIuL3BvcHVwQ29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcFVJKHBsYXllcikge1xuICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFwcC5jbGFzc0xpc3QuYWRkKFwiYXBwXCIpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBDb21wb25lbnQocGxheWVyKSk7XG4gIGNvbnN0IGJvYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvYXJkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29udGFpbmVyXCIpO1xuICBhcHAuYXBwZW5kQ2hpbGQoaGVhZGVyKCkpO1xuXG4gIGFwcC5hcHBlbmRDaGlsZChib2FyZHNDb250YWluZXIpO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmRVSSgpKTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pc3NCb2FyZFVJKCkpO1xuICBhcHAuYXBwZW5kQ2hpbGQobGVnZW5kQ29tcG9uZW50KCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYm9hcmRVSSgpIHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJnYW1lLWJvYXJkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLSR7aX0tJHtqfWApO1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImZpZWxkXCIpO1xuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm9hcmQ7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VBeGlzQnV0dG9uKHBsYXllcikge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmRpcmVjdGlvbn0gYXhpc2A7XG5cbiAgZnVuY3Rpb24gY2hhbmdlQXhpcygpIHtcbiAgICBwbGF5ZXIuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYCR7cGxheWVyLmRpcmVjdGlvbn0gYXhpc2A7XG4gIH1cblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VBeGlzKCk7XG4gIH0pO1xuXG4gIHJldHVybiBidXR0b247XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlckRpdi5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICBoZWFkZXJEaXYuaW5uZXJIVE1MID0gXCI8aDE+QmF0dGxlc2hpcHM8L2gxPlwiO1xuICByZXR1cm4gaGVhZGVyRGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVnZW5kQ29tcG9uZW50KCkge1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWdlbmQuY2xhc3NMaXN0LmFkZChcImxlZ2VuZFwiKTtcblxuICBjb25zdCBtaXNzSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhpdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdW5rSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbWlzc0l0ZW0uY2xhc3NMaXN0LmFkZChcImxlZ2VuZC1pdGVtXCIpO1xuICBoaXRJdGVtLmNsYXNzTGlzdC5hZGQoXCJsZWdlbmQtaXRlbVwiKTtcbiAgc3Vua0l0ZW0uY2xhc3NMaXN0LmFkZChcImxlZ2VuZC1pdGVtXCIpO1xuXG4gIGNvbnN0IGl0ZW1zID0gW21pc3NJdGVtLCBoaXRJdGVtLCBzdW5rSXRlbV07XG4gIGNvbnN0IHRleHRzID0gW1wiTWlzc1wiLCBcIkhpdFwiLCBcIlN1bmtcIl07XG4gIGNvbnN0IGNvbG9ycyA9IFtcIiM4NWZmYjNcIiwgXCIjZmY4NTg1XCIsIFwiYmxhY2tcIl07XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBpdGVtLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1jb2xvclwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnNbaV19XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtdGV4dFwiPiR7dGV4dHNbaV19PC9kaXY+XG4gICAgICBgO1xuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcImdpdFwiKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxlZ2VuZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pc3NCb2FyZFVJKCkge1xuICBjb25zdCBtaXNzQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaXNzQm9hcmQuY2xhc3NMaXN0LmFkZChcIm1pc3MtYm9hcmRcIik7XG4gIG1pc3NCb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChgZmllbGQtJHtpfS0ke2p9YCk7XG4gICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGRcIik7XG4gICAgICBtaXNzQm9hcmQuYXBwZW5kQ2hpbGQoZmllbGQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWlzc0JvYXJkO1xufVxuIiwiaW1wb3J0IGJvYXJkVUkgZnJvbSBcIi4vYm9hcmRVSVwiO1xuaW1wb3J0IGNoYW5nZUF4aXNCdXR0b24gZnJvbSBcIi4vY2hhbmdlQXhpc0J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1cENvbXBvbmVudChwbGF5ZXIpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgIDxoMz4gUGxhY2UgeW91ciBzaGlwcyA8L2gzPlxuICAgICAgXG4gIGA7XG5cbiAgcG9wdXAuYXBwZW5kQ2hpbGQocG9wdXBDb250ZW50KTtcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGNoYW5nZUF4aXNCdXR0b24ocGxheWVyKSk7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGJvYXJkVUkoKTtcbiAgZ2FtZWJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJnYW1lLWJvYXJkXCIpO1xuICBnYW1lYm9hcmQuY2xhc3NMaXN0LmFkZChcInBvcHVwLWJvYXJkXCIpO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkKTtcbiAgcmV0dXJuIHBvcHVwO1xufVxuIiwiaW1wb3J0IG5ld0dhbWUgZnJvbSBcIi4uL2luZGV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc3VsdENvbXBvbmVudChyZXN1bHQpIHtcbiAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBcIik7XG4gIGNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBvcHVwQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXAtY29udGVudFwiKTtcbiAgcG9wdXBDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJzbWFsbFwiKTtcbiAgcG9wdXBDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgPGgzPiAke3Jlc3VsdH0gPC9oMz5cbiAgICAgICAgXG4gICAgYDtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG5ld0dhbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBHYW1lXCI7XG4gIG5ld0dhbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5ldy1nYW1lXCIpO1xuXG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuZXdHYW1lKCk7XG4gIH0pO1xuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQobmV3R2FtZUJ1dHRvbik7XG4gIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQ29udGVudCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gIHJldHVybiBwb3B1cDtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2xvZ2ljL1BsYXllclwiO1xuaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuL2xvZ2ljL2NvbXB1dGVyXCI7XG5pbXBvcnQgYXBwVUkgZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcbmltcG9ydCBwbGF5ZXJQdXRzU2hpcHMgZnJvbSBcIi4vbG9naWMvcGxheWVyUHV0c1NoaXBzXCI7XG5pbXBvcnQgY29tcHV0ZXJQdXRzU2hpcHMgZnJvbSBcIi4vbG9naWMvY29tcHV0ZXJQdXRzU2hpcHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgbGV0IHBsYXllciA9IG51bGw7XG4gIGxldCBjb21wdXRlciA9IG51bGw7XG4gIHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXIoKTtcbiAgYXBwVUkocGxheWVyKTtcbiAgcGxheWVyUHV0c1NoaXBzKHBsYXllciwgY29tcHV0ZXIpO1xuICBjb21wdXRlclB1dHNTaGlwcyhjb21wdXRlcik7XG4gIGNvbnNvbGUubG9nKHBsYXllcik7XG59XG5uZXdHYW1lKCk7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IFwieFwiO1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ4XCIpIHRoaXMuZGlyZWN0aW9uID0gXCJ5XCI7XG4gICAgZWxzZSB0aGlzLmRpcmVjdGlvbiA9IFwieFwiO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXB1dGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IGRpc3BsYXlQbGF5ZXJTaGlwcyBmcm9tIFwiLi9kaXNwbGF5UGxheWVyU2hpcHNcIjtcbmltcG9ydCBlbmRHYW1lIGZyb20gXCIuL3Jlc3VsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlckF0dGFjayhwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWJvYXJkXCIpO1xuXG4gIGNvbnN0IHBsYXllclNoaXBzID0gcGxheWVyLmdhbWVib2FyZDtcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCBmaWVsZCA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC0ke3h9LSR7eX1gKTtcbiAgICBpZiAoZmllbGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8IGZpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3NcIikpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSBpZiAocGxheWVyU2hpcHMucmVjZWl2ZUF0dGFjayh4LCB5KSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gY2hhbmdlZCBlbHNlIHRvIGVsc2UgaWZcbiAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICBpZiAocGxheWVyU2hpcHMuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgZW5kR2FtZShcIllvdSBsb3N0XCIsIHBsYXllciwgY29tcHV0ZXIpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG5cbiAgZGlzcGxheVBsYXllclNoaXBzKHBsYXllciwgcGxheWVyQm9hcmQpO1xufVxuIiwiaW1wb3J0IGRpc3BsYXlTaGlwcyBmcm9tIFwiLi9kaXNwbGF5RW5lbXlTaGlwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wdXRlclB1dHNTaGlwcyhjb21wdXRlcikge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1pc3MtYm9hcmRcIik7XG4gIGxldCBpbmRleCA9IDA7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlci5nYW1lYm9hcmQ7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlckJvYXJkLnNoaXBzO1xuXG4gIHdoaWxlIChpbmRleCA8IGNvbXB1dGVyU2hpcHMubGVuZ3RoKSB7XG4gICAgY29uc3Qgc2hpcCA9IGNvbXB1dGVyU2hpcHNbaW5kZXhdO1xuICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICB3aGlsZSAocGxhY2VkICE9PSB0cnVlKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbk51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgIGlmIChkaXJlY3Rpb25OdW1iZXIgPT09IDApIGRpcmVjdGlvbiA9IFwieFwiO1xuICAgICAgZWxzZSBkaXJlY3Rpb24gPSBcInlcIjtcbiAgICAgIHBsYWNlZCA9IGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHksIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gMTtcbiAgfVxuXG4gIGRpc3BsYXlTaGlwcyhjb21wdXRlciwgZ2FtZWJvYXJkKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlFbmVteVNoaXBzKHBsYXllciwgYm9hcmQpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkO1xuXG4gIHBsYXllckJvYXJkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChmaWVsZCwgaWR4KSA9PiB7XG4gICAgICBjb25zdCBmaWVsZERpdiA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC0ke2l9LSR7aWR4fWApO1xuICAgICAgaWYgKGZpZWxkRGl2KSB7XG4gICAgICAgIGlmIChmaWVsZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpXG4gICAgICAgICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmY4NTg1XCI7XG4gICAgICAgIGlmIChmaWVsZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpKVxuICAgICAgICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg1ZmZiM1wiO1xuICAgICAgICBpZiAoZmllbGQgIT09IG51bGwgJiYgZmllbGQuaXNTdW5rKCkpIHtcbiAgICAgICAgICBmaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyU2hpcHMocGxheWVyLCBib2FyZCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IHBsYXllci5nYW1lYm9hcmQuYm9hcmQ7XG5cbiAgcGxheWVyQm9hcmQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgcm93LmZvckVhY2goKGZpZWxkLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkRGl2ID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7aX0tJHtpZHh9YCk7XG4gICAgICBpZiAoZmllbGREaXYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZCA9PT0gXCJvYmplY3RcIiAmJiBmaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZpZWxkLmNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXRcIikpXG4gICAgICAgICAgZmllbGREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmY4NTg1XCI7XG4gICAgICAgIGlmIChmaWVsZERpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpKVxuICAgICAgICAgIGZpZWxkRGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg1ZmZiM1wiO1xuICAgICAgICBpZiAoZmllbGQgIT09IG51bGwgJiYgZmllbGQuaXNTdW5rKCkpIHtcbiAgICAgICAgICBmaWVsZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMClcbiAgICAgIC5maWxsKG51bGwpXG4gICAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgICB0aGlzLnNoaXBzID0gW1xuICAgICAgbmV3IFNoaXAoNSwgXCIjODA4MDgwXCIpLFxuICAgICAgbmV3IFNoaXAoNCwgXCIjNzM3MzczXCIpLFxuICAgICAgbmV3IFNoaXAoMywgXCIjNjc2NzY3XCIpLFxuICAgICAgbmV3IFNoaXAoMywgXCIjNWM1YzVjXCIpLFxuICAgICAgbmV3IFNoaXAoMiwgXCIjNTI1MjUyXCIpLFxuICAgIF07XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgeCwgeSwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgIC8vIGNoZWNrIGlmIHUgY2FuIHBsYWNlIHNoaXBcbiAgICAgIGlmICh5ICsgc2hpcC5sZW5ndGggPD0gMTApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beSArIGldICE9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3hdW3kgKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ5XCIpIHtcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggPD0gMTApIHtcbiAgICAgICAgLy8gY2hlY2sgaWYgdSBjYW4gcGxhY2Ugc2hpcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAodGhpcy5ib2FyZFt4ICsgaV1beV0gIT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsYWNlIHNoaXAgYW5kIG1hcmsgbmV4dCB0byBpdFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbeF1beV0gPT09IFwib2JqZWN0XCIgJiYgdGhpcy5ib2FyZFt4XVt5XSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XS5oaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBhcmVBbGxTaGlwc1N1bmsoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zaGlwcy5maWx0ZXIoKHNoaXApID0+ICFzaGlwLmlzU3VuaygpKTtcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuIiwiaW1wb3J0IGRpc3BsYXlFbmVteVNoaXBzIGZyb20gXCIuL2Rpc3BsYXlFbmVteVNoaXBzXCI7XG5pbXBvcnQgY29tcHV0ZXJBdHRhY2sgZnJvbSBcIi4vY29tcHV0ZXJBdHRhY2tzXCI7XG5pbXBvcnQgZW5kR2FtZSBmcm9tIFwiLi9yZXN1bHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNvbXB1dGVyLCBwbGF5ZXIpIHtcbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlzcy1ib2FyZFwiKTtcblxuICBjb25zdCBmaWVsZHMgPSBjb21wdXRlckJvYXJkLmNoaWxkTm9kZXM7XG4gIGNvbnN0IGNvbXB1dGVyU2hpcHMgPSBjb21wdXRlci5nYW1lYm9hcmQ7XG5cbiAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBmaWVsZDtcbiAgICAgIGNvbnN0IHBhcnRzID0gY2xhc3NOYW1lLnNwbGl0KFwiLVwiKTtcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChwYXJ0c1sxXSwgMTApO1xuICAgICAgY29uc3QgeSA9IHBhcnNlSW50KHBhcnRzWzJdLnNwbGl0KFwiIFwiKVswXSwgMTApO1xuICAgICAgaWYgKGZpZWxkLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fCBmaWVsZC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzXCIpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoY29tcHV0ZXJTaGlwcy5yZWNlaXZlQXR0YWNrKHgsIHkpID09PSB0cnVlKSB7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIGRpc3BsYXlFbmVteVNoaXBzKGNvbXB1dGVyLCBjb21wdXRlckJvYXJkKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyU2hpcHMuYXJlQWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICBlbmRHYW1lKFwiWW91IHdvbiFcIiwgcGxheWVyLCBjb21wdXRlcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgZmllbGQuY2xhc3NMaXN0LmFkZChcIm1pc3NcIik7XG4gICAgICBkaXNwbGF5RW5lbXlTaGlwcyhjb21wdXRlciwgY29tcHV0ZXJCb2FyZCk7XG4gICAgICBjb21wdXRlckF0dGFjayhwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICB9KTtcbiAgfSk7XG59XG4iLCJpbXBvcnQgZGlzcGxheVBsYXllclNoaXBzIGZyb20gXCIuL2Rpc3BsYXlQbGF5ZXJTaGlwc1wiO1xuaW1wb3J0IHBsYXllckF0dGFjayBmcm9tIFwiLi9wbGF5ZXJBdHRhY2tzXCI7XG5cbmxldCBjdXJyZW50TW91c2VPdmVyRnVuY3Rpb24gPSBudWxsO1xubGV0IGN1cnJlbnRNb3VzZU91dEZ1bmN0aW9uID0gbnVsbDtcblxuY29uc3QgaG92ZXJDb2xvciA9IFwicmdiKDE3MywgMjE2LCAyMzApXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXllclB1dHNTaGlwcyhwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcblxuICBsZXQgaW5kZXggPSAwO1xuICBjb25zdCBwb3B1cEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib2FyZFwiKTtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtYm9hcmRcIik7XG5cbiAgY29uc3QgZmllbGRzID0gcG9wdXBCb2FyZC5jaGlsZE5vZGVzO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyLmdhbWVib2FyZDtcbiAgY29uc3QgcGxheWVyU2hpcHMgPSBwbGF5ZXJCb2FyZC5zaGlwcztcblxuICBob3ZlclB1dHRpbmcocGxheWVyQm9hcmQsIHBsYXllciwgaW5kZXgpO1xuXG4gIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGNsYXNzTmFtZSB9ID0gZmllbGQ7XG4gICAgICBjb25zdCBwYXJ0cyA9IGNsYXNzTmFtZS5zcGxpdChcIi1cIik7XG4gICAgICBjb25zdCB4ID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKTtcbiAgICAgIGNvbnN0IHkgPSBwYXJzZUludChwYXJ0c1syXS5zcGxpdChcIiBcIilbMF0sIDEwKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJTaGlwc1tpbmRleF07XG5cbiAgICAgIGlmIChwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgcGxheWVyLmRpcmVjdGlvbikpIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgcmVtb3ZlSG92ZXIoKTtcbiAgICAgICAgaG92ZXJQdXR0aW5nKHBsYXllckJvYXJkLCBwbGF5ZXIsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gNSkge1xuICAgICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRpc3BsYXlQbGF5ZXJTaGlwcyhwbGF5ZXIsIGJvYXJkKTtcbiAgICAgICAgcGxheWVyQXR0YWNrKGNvbXB1dGVyLCBwbGF5ZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlQbGF5ZXJTaGlwcyhwbGF5ZXIsIHBvcHVwQm9hcmQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VPdmVyKGdhbWVib2FyZCwgcGxheWVyLCBpbmRleCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm9hcmRcIik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBcImF1dG9cIjtcblxuICAgIGNvbnN0IHggPSBwYXJzZUludCh0aGlzLmNsYXNzTmFtZS5zcGxpdChcIi1cIilbMV0pO1xuICAgIGNvbnN0IHkgPSBwYXJzZUludCh0aGlzLmNsYXNzTmFtZS5zcGxpdChcIi1cIilbMl0uc3BsaXQoXCIgXCIpWzBdKTtcblxuICAgIGlmIChwbGF5ZXIuZGlyZWN0aW9uID09PSBcInhcIikge1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbeF1beV0gIT09IG51bGwgfHxcbiAgICAgICAgeSArIGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoID4gMTBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnN0eWxlLmN1cnNvciA9IFwibm90LWFsbG93ZWRcIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHkgKyBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICAvLyBjaGVja2luIGlmIHUgY2FuIHBsYWNlIHNoaXBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt4XVt5ICsgaV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBob3ZlcmluZyBvdmVyIGZpZWxkc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC0ke3h9LSR7eSArIGl9YCk7XG5cbiAgICAgICAgICBpZiAoZmllbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwidHJhbnNwYXJlbnRcIilcbiAgICAgICAgICAgICAgZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaG92ZXJDb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBsYXllci5kaXJlY3Rpb24gPT09IFwieVwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFt4XVt5XSAhPT0gbnVsbCB8fFxuICAgICAgICB4ICsgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGggPiAxMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuY3Vyc29yID0gXCJub3QtYWxsb3dlZFwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoeCArIGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoIDw9IDEwKSB7XG4gICAgICAgIC8vIGNoZWNraW4gaWYgdSBjYW4gcGxhY2Ugc2hpcFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3ggKyBpXVt5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jdXJzb3IgPSBcIm5vdC1hbGxvd2VkXCI7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGhvdmVyaW5nIG92ZXIgZmllbGRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGZpZWxkID0gYm9hcmQucXVlcnlTZWxlY3RvcihgLmZpZWxkLSR7eCArIGl9LSR7eX1gKTtcblxuICAgICAgICAgIGlmIChmaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9PT0gXCJ0cmFuc3BhcmVudFwiKVxuICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBob3ZlckNvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlT3V0KGdhbWVib2FyZCwgcGxheWVyLCBpbmRleCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm9hcmRcIik7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgeCA9IHBhcnNlSW50KHRoaXMuY2xhc3NOYW1lLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KHRoaXMuY2xhc3NOYW1lLnNwbGl0KFwiLVwiKVsyXS5zcGxpdChcIiBcIilbMF0pO1xuXG4gICAgaWYgKHRoaXMuc3R5bGUuYmFja2dyb3VuZENvbG9yICE9PSBob3ZlckNvbG9yKSByZXR1cm47XG5cbiAgICBpZiAocGxheWVyLmRpcmVjdGlvbiA9PT0gXCJ4XCIpIHtcbiAgICAgIGlmICh5ICsgZ2FtZWJvYXJkLnNoaXBzW2luZGV4XS5sZW5ndGggPD0gMTApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29uc3QgZmllbGQgPSBib2FyZC5xdWVyeVNlbGVjdG9yKGAuZmllbGQtJHt4fS0ke3kgKyBpfWApO1xuXG4gICAgICAgICAgaWYgKGZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID09PSBob3ZlckNvbG9yKVxuICAgICAgICAgICAgICBmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwbGF5ZXIuZGlyZWN0aW9uID09PSBcInlcIikge1xuICAgICAgaWYgKHggKyBnYW1lYm9hcmQuc2hpcHNbaW5kZXhdLmxlbmd0aCA8PSAxMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5zaGlwc1tpbmRleF0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb25zdCBmaWVsZCA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYC5maWVsZC0ke3ggKyBpfS0ke3l9YCk7XG5cbiAgICAgICAgICBpZiAoZmllbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT09IGhvdmVyQ29sb3IpXG4gICAgICAgICAgICAgIGZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhvdmVyUHV0dGluZyhnYW1lYm9hcmQsIHBsYXllciwgaW5kZXgpIHtcbiAgaWYgKGluZGV4ID09PSA1KSByZXR1cm47XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cC1ib2FyZFwiKTtcbiAgY29uc3QgZmllbGRzID0gYm9hcmQuY2hpbGROb2RlcztcblxuICBjdXJyZW50TW91c2VPdmVyRnVuY3Rpb24gPSBoYW5kbGVNb3VzZU92ZXIoZ2FtZWJvYXJkLCBwbGF5ZXIsIGluZGV4KTtcbiAgY3VycmVudE1vdXNlT3V0RnVuY3Rpb24gPSBoYW5kbGVNb3VzZU91dChnYW1lYm9hcmQsIHBsYXllciwgaW5kZXgpO1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGN1cnJlbnRNb3VzZU92ZXJGdW5jdGlvbik7XG4gICAgZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGN1cnJlbnRNb3VzZU91dEZ1bmN0aW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUhvdmVyKCkge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXAtYm9hcmRcIik7XG4gIGNvbnN0IGZpZWxkcyA9IGJvYXJkLmNoaWxkTm9kZXM7XG4gIGlmIChjdXJyZW50TW91c2VPdmVyRnVuY3Rpb24gJiYgY3VycmVudE1vdXNlT3V0RnVuY3Rpb24pIHtcbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgY3VycmVudE1vdXNlT3ZlckZ1bmN0aW9uKTtcbiAgICAgIGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjdXJyZW50TW91c2VPdXRGdW5jdGlvbik7XG4gICAgfSk7XG4gICAgY3VycmVudE1vdXNlT3ZlckZ1bmN0aW9uID0gbnVsbDtcbiAgICBjdXJyZW50TW91c2VPdXRGdW5jdGlvbiA9IG51bGw7XG4gIH1cbn1cbiIsImltcG9ydCByZXN1bHRQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXN1bHRQb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAobWVzc2FnZSwgcGxheWVyLCBjb21wdXRlcikge1xuICBwbGF5ZXIucmVzZXQoKTtcbiAgY29tcHV0ZXIucmVzZXQoKTtcbiAgcmVzdWx0UG9wdXAobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBjb2xvcikge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRzKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbmJvZHkgLmxlZ2VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbn1cbmJvZHkgLmxlZ2VuZCAubGVnZW5kLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJvZHkgLmxlZ2VuZCAubGVnZW5kLWl0ZW0gLmxlZ2VuZC1jb2xvciB7XG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59XG5ib2R5IC5oZWFkZXIge1xuICBtYXJnaW46IDA7XG59XG5ib2R5IC5oZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBpcmF0YSBPbmVcIjtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuYm9keSAucG9wdXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5ib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNjAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICBib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxufVxuYm9keSAucG9wdXAgLnBvcHVwLWNvbnRlbnQgaDMge1xuICBmb250LXNpemU6IDJyZW07XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbmJvZHkgLnBvcHVwIC5wb3B1cC1jb250ZW50IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzMsIDIxNiwgMjMwKTtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5ib2R5IC5wb3B1cCAucG9wdXAtY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM1LCAyMDYsIDIzNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJvZHkgLnBvcHVwIC5wb3B1cC1jb250ZW50IC5naWYge1xuICB3aWR0aDogNzAlO1xufVxuYm9keSAucG9wdXAgLnNtYWxsIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiA1cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkgLnBvcHVwIC5zbWFsbCB7XG4gICAgcGFkZGluZzogMTByZW07XG4gIH1cbn1cbmJvZHkgLmFwcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSAuYXBwIHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgYm9keSAuYXBwIHtcbiAgICBnYXA6IDNyZW07XG4gIH1cbn1cblxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGdhcDogMnJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBnYXA6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICB3aWR0aDogODUlO1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbn1cbi5ib2FyZC1jb250YWluZXIgLmJvYXJkIC5maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59XG4uYm9hcmQtY29udGFpbmVyIC5ib2FyZCAuc3VuayB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib2FyZC1jb250YWluZXIgLm1pc3MtYm9hcmQgLmZpZWxkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYm9hcmQtY29udGFpbmVyIC5taXNzLWJvYXJkIC5maWVsZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG59XG5cbi5wb3B1cC1ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICB3aWR0aDogMzQwcHg7XG4gIGhlaWdodDogMzQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnBvcHVwLWJvYXJkIHtcbiAgICB3aWR0aDogNDQwcHg7XG4gICAgaGVpZ2h0OiA0NDBweDtcbiAgfVxufVxuLnBvcHVwLWJvYXJkIC5maWVsZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU1NTU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUpBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDSjtBQUFJO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVOO0FBRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBR1I7QUFDRTtFQUNFLFNBQUE7QUFDSjtBQUFJO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ047QUFDTTtFQVpGO0lBYUksVUFBQTtJQUNBLFdBQUE7RUFFTjtBQUNGO0FBRE07RUFoQkY7SUFpQkksVUFBQTtJQUNBLFdBQUE7RUFJTjtBQUNGO0FBSE07RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBS1I7QUFITTtFQUNFLG9DQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBS1I7QUFITTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtBQUtSO0FBSE07RUFDRSxVQUFBO0FBS1I7QUFGSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSU47QUFITTtFQUpGO0lBS0ksY0FBQTtFQU1OO0FBQ0Y7QUFIRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUtKO0FBSkk7RUFURjtJQVVJLFNBQUE7RUFPSjtBQUNGO0FBTkk7RUFaRjtJQWFJLFNBQUE7RUFTSjtBQUNGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBU0Y7QUFQRTtFQVJGO0lBU0ksVUFBQTtJQUNBLFNBQUE7RUFVRjtBQUNGO0FBVEU7RUFaRjtJQWFJLG1CQUFBO0VBWUY7QUFDRjtBQVhFO0VBZkY7SUFnQkksVUFBQTtFQWNGO0FBQ0Y7QUFaRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBY0o7QUFiSTtFQUNFLHlCQUFBO0FBZU47QUFiSTtFQUNFLFlBQUE7QUFlTjtBQVhJO0VBQ0UsNkJBQUE7QUFhTjtBQVhJO0VBQ0UseUJBQUE7QUFhTjs7QUFUQTtFQUNFLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFZRjtBQVhFO0VBTkY7SUFPSSxZQUFBO0lBQ0EsYUFBQTtFQWNGO0FBQ0Y7QUFiRTtFQUNFLHlCQUFBO0FBZUpcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImJvYXJkVUkiLCJoZWFkZXIiLCJsZWdlbmRDb21wb25lbnQiLCJtaXNzQm9hcmRVSSIsInBvcHVwQ29tcG9uZW50IiwiYXBwVUkiLCJwbGF5ZXIiLCJkb2N1bWVudCIsImJvZHkiLCJpbm5lckhUTUwiLCJhcHAiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJib2FyZHNDb250YWluZXIiLCJib2FyZCIsImkiLCJqIiwiZmllbGQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZUF4aXNCdXR0b24iLCJidXR0b24iLCJ0ZXh0Q29udGVudCIsImRpcmVjdGlvbiIsImNoYW5nZUF4aXMiLCJjaGFuZ2VEaXJlY3Rpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaGVhZGVyRGl2IiwiY2xhc3NOYW1lIiwibGVnZW5kIiwibWlzc0l0ZW0iLCJoaXRJdGVtIiwic3Vua0l0ZW0iLCJpdGVtcyIsInRleHRzIiwiY29sb3JzIiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwibWlzc0JvYXJkIiwicG9wdXAiLCJwb3B1cENvbnRlbnQiLCJnYW1lYm9hcmQiLCJyZW1vdmUiLCJuZXdHYW1lIiwicmVzdWx0Q29tcG9uZW50IiwicmVzdWx0IiwibmV3R2FtZUJ1dHRvbiIsIlBsYXllciIsIkNvbXB1dGVyIiwicGxheWVyUHV0c1NoaXBzIiwiY29tcHV0ZXJQdXRzU2hpcHMiLCJjb21wdXRlciIsIkdhbWVib2FyZCIsImNvbnN0cnVjdG9yIiwicmVzZXQiLCJkaXNwbGF5UGxheWVyU2hpcHMiLCJlbmRHYW1lIiwiY29tcHV0ZXJBdHRhY2siLCJwbGF5ZXJCb2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXJTaGlwcyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwiY29udGFpbnMiLCJyZWNlaXZlQXR0YWNrIiwiYXJlQWxsU2hpcHNTdW5rIiwiZGlzcGxheVNoaXBzIiwiaW5kZXgiLCJjb21wdXRlckJvYXJkIiwiY29tcHV0ZXJTaGlwcyIsInNoaXBzIiwibGVuZ3RoIiwic2hpcCIsInBsYWNlZCIsImRpcmVjdGlvbk51bWJlciIsInBsYWNlU2hpcCIsImRpc3BsYXlFbmVteVNoaXBzIiwicm93IiwiaWR4IiwiZmllbGREaXYiLCJpc1N1bmsiLCJjb2xvciIsIlNoaXAiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJoaXQiLCJmaWx0ZXIiLCJwbGF5ZXJBdHRhY2siLCJmaWVsZHMiLCJjaGlsZE5vZGVzIiwicGFydHMiLCJzcGxpdCIsInBhcnNlSW50IiwiY3VycmVudE1vdXNlT3ZlckZ1bmN0aW9uIiwiY3VycmVudE1vdXNlT3V0RnVuY3Rpb24iLCJob3ZlckNvbG9yIiwicG9wdXBCb2FyZCIsImhvdmVyUHV0dGluZyIsInJlbW92ZUhvdmVyIiwiZGlzcGxheSIsImhhbmRsZU1vdXNlT3ZlciIsImN1cnNvciIsImhhbmRsZU1vdXNlT3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlc3VsdFBvcHVwIiwibWVzc2FnZSIsInN1bmsiLCJoaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==