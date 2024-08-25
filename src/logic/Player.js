import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.direction = "horizontally";
  }

  changeDirection() {
    if (this.direction === "vertically") this.direction = "horizontally";
    else this.direction = "vertically";
  }
}
