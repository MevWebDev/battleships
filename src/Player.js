import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.direction = "vertically";
  }

  changeDirection() {
    if (this.direction === "vertically") this.direction = "horizontally";
    else this.direction = "vertically";
  }
}
