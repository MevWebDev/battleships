import "./style.scss";
import Ship from "./logic/ship";
import Gameboard from "./logic/gameboard";
import Player from "./logic/Player";
import Computer from "./logic/computer";
import appUI from "./components/app";
import playerPutsShips from "./logic/playerPutsShips";
import computerPutsShips from "./logic/computerPutsShips";

const player = new Player();

const computer = new Computer();

appUI();
playerPutsShips(player);
computerPutsShips(computer);
