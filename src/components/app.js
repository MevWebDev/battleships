import boardUI from "./boardUI";
import header from "./header";
import missBoardUI from "./missBoardUI";
import popupComponent from "./popupComponent";

export default function appUI() {
  const app = document.createElement("div");
  app.classList.add("app");
  document.body.appendChild(app);
  document.body.appendChild(popupComponent());
  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("board-container");
  app.appendChild(header());
  app.appendChild(boardsContainer);
  boardsContainer.appendChild(boardUI());
  boardsContainer.appendChild(missBoardUI());
}
