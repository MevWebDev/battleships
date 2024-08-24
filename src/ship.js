export default class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
  }

  isSunk() {
    return this.length === this.hits;
  }

  hit() {
    this.hits += 1;
  }
}
