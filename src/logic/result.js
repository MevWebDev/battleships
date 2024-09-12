import newGame from "../index";

export default function (message, player, computer) {
  alert(message);
  newGame();
  player.reset();
  computer.reset();
}
