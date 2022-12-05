import { getPaints, setPaint } from "./database.js";

const paints = getPaints();

export const Paints = () => {
  return `<section class="choices__paints options">
  <h2>Paints</h2>
    <select id="paint">
      <option value="0">Select a paint color</option>
        ${paints
          .map((paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`;
          })
          .join("")}
    </select>
  </section>
  `;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "paint") {
    setPaint(parseInt(event.target.value));
  }
});
