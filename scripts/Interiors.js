import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors();

export const Interiors = () => {
  return `<section class="choices__interiors options">
  <h2>Interiors</h2>
    <select id="interior">
      <option value="0">Select an interior upholstery</option>
        ${interiors
          .map((material) => {
            return `<option value="${material.id}">${material.material}</option>`;
          })
          .join("")}
    </select>
  </section>`;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "interior") {
    setInterior(parseInt(event.target.value));
  }
});
