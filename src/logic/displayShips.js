export default function displayShips(player, board) {
  const playerBoard = player.gameboard.board;

  playerBoard.forEach((row, i) => {
    row.forEach((field, idx) => {
      const fieldDiv = board.querySelector(`.field-${i}-${idx}`);
      if (fieldDiv) {
        if (typeof field === "object" && field !== null) {
          fieldDiv.classList.add("ship");
        }
        if (field === "x" && field !== null)
          fieldDiv.style.backgroundColor = "blue";
      }
    });
  });
}
