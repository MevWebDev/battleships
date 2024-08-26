export default class Ship {
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
