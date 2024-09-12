import boardUI from "./boardUI";
import changeAxisButton from "./changeAxisButton";

export default function popupComponent(player) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.innerHTML = `
      <h3> Place your ships </h3>
      
  `;

  popup.appendChild(popupContent);
  popupContent.appendChild(changeAxisButton(player));
  const gameboard = boardUI();
  gameboard.classList.remove("game-board");
  gameboard.classList.add("popup-board");
  popupContent.appendChild(gameboard);
  return popup;
}
