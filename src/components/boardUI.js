export default function boardUI(player) {
  const board = document.createElement("div");
  board.classList.add("board");
  board.classList.add("game-board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const field = document.createElement("div");
      field.classList.add(`field-${i}-${j}`);
      field.classList.add("field");
      board.appendChild(field);
      field.style.backgroundColor = "transparent";
    }
  }
  return board;
}
