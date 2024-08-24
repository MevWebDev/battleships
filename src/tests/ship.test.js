import Ship from "../ship";

test("ship has length", () => {
  const ship = new Ship(4);
  expect(ship.length).toBe(4);
});

test("ship returns isSunk value", () => {
  const ship = new Ship(4);
  expect(ship.isSunk()).toBe(false);
});

test("ship properly gets hit and updates it hits", () => {
  const ship = new Ship(4);
  ship.hit();
  expect(ship.hits).toBe(1);
});
