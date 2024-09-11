export default function displayEnemyShips(player, board) {
  const playerBoard = player.gameboard.board;

  playerBoard.forEach((row, i) => {
    row.forEach((field, idx) => {
      const fieldDiv = board.querySelector(`.field-${i}-${idx}`);
      if (fieldDiv) {
        if (fieldDiv.classList.contains("hit"))
          fieldDiv.style.backgroundColor = "#ff8585";
        if (fieldDiv.classList.contains("miss"))
          fieldDiv.style.backgroundColor = "#85ffb3";
        if (field !== null && field.isSunk()) {
          fieldDiv.style.backgroundColor = "red";
        }
      }
    });
  });
}
