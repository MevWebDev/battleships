import Ship from "../logic/ship";
import Gameboard from "../logic/gameboard";
import Player from "../logic/Player";
import Computer from "../logic/computer";

test("initalizes player with gameboard", () => {
  const player = new Player();
  expect(player.gameboard.board).toBeDefined();
});

test("player places ship correctly", () => {
  const player = new Player();
  player.gameboard.placeShip(player.gameboard.ships[0], 0, 0);
  expect(player.gameboard.board[0][0]).toBeDefined();
});
