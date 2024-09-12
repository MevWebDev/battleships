import Gameboard from "./gameboard";

export default class Computer {
  constructor() {
    this.gameboard = new Gameboard();
  }

  reset() {
    this.gameboard = new Gameboard();
  }
}
