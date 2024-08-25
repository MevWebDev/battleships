import boardUI from "./boardUI";
import missBoardUI from "./missBoardUI";
export default function appUI() {
  const app = document.createElement("div");
  app.classList.add("app");
  document.body.appendChild(app);
  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("board-container");
  app.appendChild(boardsContainer);
  boardsContainer.appendChild(boardUI());
  boardsContainer.appendChild(missBoardUI());
}
