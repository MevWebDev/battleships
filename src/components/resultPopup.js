import newGame from "../index";

export default function resultComponent(result) {
  const popup = document.createElement("div");
  popup.classList.add("popup");
  const popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  popupContent.classList.add("small");
  popupContent.innerHTML = `
        <h3> ${result} </h3>
        
    `;
  const newGameButton = document.createElement("button");
  newGameButton.textContent = "New Game";
  newGameButton.classList.add("new-game");

  newGameButton.addEventListener("click", () => {
    newGame();
  });
  popupContent.appendChild(newGameButton);
  popup.appendChild(popupContent);

  document.body.appendChild(popup);
  return popup;
}
