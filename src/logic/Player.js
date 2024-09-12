import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.direction = "x";
  }

  changeDirection() {
    if (this.direction === "x") this.direction = "y";
    else this.direction = "x";
  }

  reset() {
    this.gameboard = new Gameboard();
  }
}
