import Ship from "./ship";
export default class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [
      new Ship(5),
      new Ship(4),
      new Ship(3),
      new Ship(3),
      new Ship(2),
    ];
  }

  placeShip(ship, x, y, direction) {
    if (direction === "horizontally") {
      if (x + ship.length <= 9) {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x][y + i] = ship;
        }
      }
    } else if (direction === "vertically") {
      if (y + ship.length <= 9) {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = ship;
        }
      }
    }
  }

  receiveAttack(x, y) {
    if (typeof this.board[x][y] === "object" && this.board[x][y] !== null) {
      this.board[x][y].hit();
      return true;
    }
    this.board[x][y] = "miss";
    return false;
  }

  areAllShipsSunk() {
    const result = this.ships.filter((ship) => !ship.isSunk());
    return result.length === 0;
  }
}
