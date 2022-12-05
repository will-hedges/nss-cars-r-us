import { getPaints } from "./database.js";

const paints = getPaints();

export const Paints = () => {
  return `<h2>Paints</h2>
    <select id="paint">
      <option value="0">Select a paint color</option>
        ${paints
          .map((paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`;
          })
          .join("")}
    </select>
    
  `;
};

document.addEventListener("change", (event) => {
  const dropdown = event.target;

  if (dropdown.id === "paint") {
    // get the id of the chosen paint color
    const paintId = parseInt(event.target.value);
    // find the paint object with the matching id
    const foundPaint = paints.find((paint) => paint.id === paintId);
    // get the color property
    const paintColor = foundPaint.color;
    // show the alert
    window.alert(`The customer chose ${paintColor} paint`);
  }
});
