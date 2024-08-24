import Ship from "./ship";
export default class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [];
  }
  placeShip(ship, x, y, direction) {
    if (direction === "horizontally") {
      if (x + ship.length <= 9) {
        for (let i = 0; i < ship.length; i++) {
          this.board[x][y + i] = ship;
        }
      }
    } else if (direction === "vertically") {
      if (y + ship.length <= 9) {
        for (let i = 0; i < ship.length; i++) {
          this.board[x + i][y] = ship;
        }
      }
    }
  }
  receiveAttack(x, y) {
    if (typeof this.board[x][y] === "object" && this.board[x][y] !== null) {
      this.board[x][y].hit();
      return true;
    } else {
      this.board[x][y] = "miss";
      return false;
    }
  }
  areAllShipsSunk() {
    const result = this.ships.filter((ship) => {
      return ship.isSunk() === false;
    });
    if (result.length > 0) return false;
    else return true;
  }
}
