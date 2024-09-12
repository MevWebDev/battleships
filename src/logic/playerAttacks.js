import displayEnemyShips from "./displayEnemyShips";
import computerAttack from "./computerAttacks";
import endGame from "./result";

export default function playerAttack(computer, player) {
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
        displayEnemyShips(computer, computerBoard);
        if (computerShips.areAllShipsSunk()) {
          endGame("You won!", player, computer);
          return;
        }
      } else field.classList.add("miss");
      displayEnemyShips(computer, computerBoard);
      computerAttack(player, computer);
    });
  });
}
