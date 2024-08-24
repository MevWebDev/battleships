import Gameboard from "../gameboard";
import Ship from "../ship";
test("places ship correctly horizontally", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "horizontally");
  for (let i = 0; i < ship.length; i++) {
    expect(gameboard.board[0][0 + i]).toBe(ship);
  }
});
test("places ship correctly vertically", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "vertically");
  for (let i = 0; i < ship.length; i++) {
    expect(gameboard.board[0 + i][0]).toBe(ship);
  }
});

test("attack simulation - check coordinates and reports git/not hit", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "vertically");
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(5, 5)).toBe(false);
});

test("updates hits value if ship was hit", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "vertically");
  gameboard.receiveAttack(0, 0);
  expect(ship.hits).toBe(1);
});

test("places 'miss' on empty field", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "vertically");
  gameboard.receiveAttack(5, 5);
  expect(gameboard.board[5][5]).toBe("miss");
});
