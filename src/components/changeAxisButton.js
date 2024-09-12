export default function changeAxisButton(player) {
  const button = document.createElement("button");
  button.classList.add("rotate");
  button.textContent = `${player.direction} axis`;

  function changeAxis() {
    player.changeDirection();
    button.textContent = `${player.direction} axis`;
  }

  button.addEventListener("click", () => {
    changeAxis();
  });

  return button;
}
