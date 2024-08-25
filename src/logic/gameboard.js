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
      // check if u can place ship
      if (y + ship.length <= 10) {
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[x][y + i] !== null) return false;
        }
        // mark corners before ship
        if (x - 1 >= 0 && y - 1 >= 0) {
          if (this.board[x - 1][y - 1] === null) this.board[x - 1][y - 1] = "x";
        }
        if (x + 1 < 10 && y - 1 >= 0) {
          if (this.board[x + 1][y - 1] === null) this.board[x + 1][y - 1] = "x";
        }

        // place ship and corners next to it
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x][y + i] = ship;
          if (x - 1 >= 0) this.board[x - 1][y + i] = "x";
          if (x + 1 < 10) this.board[x + 1][y + i] = "x";
        }

        // mark top and bottom of ship
        if (y - 1 >= 0) {
          if (this.board[x][y - 1] === null) this.board[x][y - 1] = "x";
        }
        if (y + ship.length < 10) {
          if (this.board[x][y + ship.length] === null)
            this.board[x][y + ship.length] = "x";
        }

        // Mark the corners after the ship
        if (x - 1 >= 0 && y + ship.length < 10) {
          if (this.board[x - 1][y + ship.length] === null)
            this.board[x - 1][y + ship.length] = "x";
        }
        if (x + 1 < 10 && y + ship.length < 10) {
          if (this.board[x + 1][y + ship.length] === null)
            this.board[x + 1][y + ship.length] = "x";
        }

        return true;
      }
    } else if (direction === "vertically") {
      if (x + ship.length <= 10) {
        // check if u can place ship
        for (let i = 0; i < ship.length; i += 1) {
          if (this.board[x + i][y] !== null) return false;
        }

        // mark corners before ship
        if (x - 1 >= 0 && y - 1 >= 0) {
          if (this.board[x - 1][y - 1] === null) this.board[x - 1][y - 1] = "x";
        }
        if (x - 1 >= 0 && y + 1 < 10) {
          if (this.board[x - 1][y + 1] === null) this.board[x - 1][y + 1] = "x";
        }

        // place ship and mark next to it
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = ship;
          if (y - 1 >= 0) this.board[x + i][y - 1] = "x";
          if (y + 1 <= 10) this.board[x + i][y + 1] = "x";
        }

        // mark top and bottom of ship
        if (x - 1 >= 0) {
          if (this.board[x - 1][y] === null) this.board[x - 1][y] = "x";
        }
        if (x + ship.length < 10) {
          if (this.board[x + ship.length][y] === null)
            this.board[x + ship.length][y] = "x";
        }

        // Mark the corners after the ship
        if (x + ship.length < 10 && y - 1 >= 0) {
          if (this.board[x + ship.length][y - 1] === null)
            this.board[x + ship.length][y - 1] = "x";
        }
        if (x + ship.length < 10 && y + 1 < 10) {
          if (this.board[x + ship.length][y + 1] === null)
            this.board[x + ship.length][y + 1] = "x";
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
