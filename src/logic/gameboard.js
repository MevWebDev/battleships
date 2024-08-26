import Ship from "./ship";

export default class Gameboard {
  constructor() {
    this.board = Array(10)
      .fill(null)
      .map(() => Array(10).fill(null));
    this.ships = [
      new Ship(5, "grey"),
      new Ship(4, "yellow"),
      new Ship(3, "green"),
      new Ship(3, "pink"),
      new Ship(2, "purple"),
    ];
  }

  placeShip(ship, x, y, direction) {
    if (direction === "horizontally") {
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
    } else if (direction === "vertically") {
      if (x + ship.length <= 10) {
        // check if u can place ship
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[x + i][y] !== null) return false;
        }

        // place ship and mark next to it
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = ship;
          // if (y - 1 >= 0) this.board[x + i][y - 1] = "x";
          // if (y + 1 <= 10) this.board[x + i][y + 1] = "x";
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
    this.board[x][y] = "miss";
    return false;
  }

  areAllShipsSunk() {
    const result = this.ships.filter((ship) => !ship.isSunk());
    return result.length === 0;
  }
}
