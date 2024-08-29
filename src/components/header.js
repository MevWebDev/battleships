export default function header() {
  const headerDiv = document.createElement("div");
  headerDiv.className = "header";
  headerDiv.innerHTML = "<h1>Battleships</h1>";
  return headerDiv;
}
