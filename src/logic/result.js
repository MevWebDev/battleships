import resultPopup from "../components/resultPopup";

export default function (message, player, computer) {
  player.reset();
  computer.reset();
  resultPopup(message);
}
