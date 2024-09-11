import "./style.scss";

import Player from "./logic/Player";
import Computer from "./logic/computer";
import appUI from "./components/app";
import playerPutsShips from "./logic/playerPutsShips";
import computerPutsShips from "./logic/computerPutsShips";

function startGame() {
  const player = new Player();
  const computer = new Computer();
  return { player, computer };
}
const { player, computer } = startGame();
export { player, computer };
appUI();
playerPutsShips(player);
computerPutsShips(computer);
