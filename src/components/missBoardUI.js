export default function missBoardUI() {
  const missBoard = document.createElement("div");
  missBoard.classList.add("miss-board");
  missBoard.classList.add("board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const field = document.createElement("div");
      field.classList.add(`field-${i}-${j}`);
      field.classList.add("field");
      missBoard.appendChild(field);
    }
  }
  return missBoard;
}
