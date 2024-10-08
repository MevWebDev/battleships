import Gameboard from "../logic/gameboard";
import Ship from "../logic/ship";

test("places ship correctly x", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "x");
  for (let i = 0; i < ship.length; i++) {
    expect(gameboard.board[0][0 + i]).toBe(ship);
  }
});
test("places ship correctly y", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "y");
  for (let i = 0; i < ship.length; i++) {
    expect(gameboard.board[0 + i][0]).toBe(ship);
  }
});

test("attack simulation - check coordinates and reports git/not hit", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "y");
  expect(gameboard.receiveAttack(0, 0)).toBe(true);
  expect(gameboard.receiveAttack(5, 5)).toBe(false);
});

test("updates hits value if ship was hit", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "y");
  gameboard.receiveAttack(0, 0);
  expect(ship.hits).toBe(1);
});

test("update is sunk if ship was sunk", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);
  gameboard.placeShip(ship, 0, 0, "y");
  gameboard.receiveAttack(0, 0);
  expect(ship.isSunk()).toBe(true);
});

test("places 'miss' on empty field", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(4);
  gameboard.placeShip(ship, 0, 0, "y");
  gameboard.receiveAttack(5, 5);
  expect(gameboard.board[5][5]).toBe("miss");
});

test("checks if all ships are not sunk", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);
  gameboard.ships.push(ship);
  gameboard.placeShip(ship, 0, 0, "y");
  expect(gameboard.areAllShipsSunk()).toBe(false);
});

test.skip("checks if all ships are sunk after hitting last ship", () => {
  const gameboard = new Gameboard();
  const ship = new Ship(1);
  gameboard.ships.push(ship);
  gameboard.placeShip(ship, 0, 0, "y");
  gameboard.receiveAttack(0, 0);
  expect(gameboard.areAllShipsSunk()).toBe(true);
});
