import "./style.scss";

import Player from "./logic/Player";
import Computer from "./logic/computer";
import appUI from "./components/app";
import playerPutsShips from "./logic/playerPutsShips";
import computerPutsShips from "./logic/computerPutsShips";

export default function newGame() {
  let player = null;
  let computer = null;
  player = new Player();
  computer = new Computer();
  appUI(player);
  playerPutsShips(player, computer);
  computerPutsShips(computer);
  console.log(player);
}
newGame();
