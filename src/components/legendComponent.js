export default function legendComponent() {
  const legend = document.createElement("div");
  legend.classList.add("legend");

  const missItem = document.createElement("div");
  const hitItem = document.createElement("div");
  const sunkItem = document.createElement("div");

  missItem.classList.add("legend-item");
  hitItem.classList.add("legend-item");
  sunkItem.classList.add("legend-item");

  const items = [missItem, hitItem, sunkItem];
  const texts = ["Miss", "Hit", "Sunk"];
  const colors = ["#85ffb3", "#ff8585", "black"];
  items.forEach((item, i) => {
    item.innerHTML = `
        <div class="legend-color" style="background-color: ${colors[i]}"></div>
        <div class="legend-text">${texts[i]}</div>
      `;
    legend.appendChild(item);
    console.log("git");
  });

  return legend;
}
