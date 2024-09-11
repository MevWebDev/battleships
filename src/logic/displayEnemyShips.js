export default function displayEnemyShips(player, board) {
  const playerBoard = player.gameboard.board;

  playerBoard.forEach((row, i) => {
    row.forEach((field, idx) => {
      const fieldDiv = board.querySelector(`.field-${i}-${idx}`);
      if (fieldDiv) {
        if (fieldDiv.classList.contains("hit"))
          fieldDiv.style.backgroundColor = "red";
        if (fieldDiv.classList.contains("miss"))
          fieldDiv.style.backgroundColor = "white";
        if (field !== null && field.isSunk()) {
          fieldDiv.style.backgroundColor = "black";
        }
      }
    });
  });
}
