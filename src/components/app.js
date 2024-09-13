import boardUI from "./boardUI";
import header from "./header";
import legendComponent from "./legendComponent";
import missBoardUI from "./missBoardUI";
import popupComponent from "./popupComponent";

export default function appUI(player) {
  document.body.innerHTML = "";
  const app = document.createElement("div");
  app.classList.add("app");
  document.body.appendChild(app);
  document.body.appendChild(popupComponent(player));
  const boardsContainer = document.createElement("div");
  boardsContainer.classList.add("board-container");
  app.appendChild(header());

  app.appendChild(boardsContainer);
  boardsContainer.appendChild(boardUI());
  boardsContainer.appendChild(missBoardUI());
  app.appendChild(legendComponent());
}
