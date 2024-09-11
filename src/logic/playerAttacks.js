import { computer } from "../index";
import displayEnemyShips from "./displayEnemyShips";
import computerAttack from "./computerAttacks";

export default function playerAttack() {
  const computerBoard = document.querySelector(".miss-board");

  const fields = computerBoard.childNodes;
  const computerShips = computer.gameboard;

  fields.forEach((field) => {
    field.addEventListener("click", () => {
      const { className } = field;
      const parts = className.split("-");
      const x = parseInt(parts[1], 10);
      const y = parseInt(parts[2].split(" ")[0], 10);

      if (computerShips.receiveAttack(x, y) === true) {
        field.classList.add("hit");
        if (computerShips.areAllShipsSunk()) {
          alert("You won!");
        }
      } else field.classList.add("miss");
      displayEnemyShips(computer, computerBoard);
      computerAttack();
    });
  });
}
