import { getInteriors } from "./database.js";

const interiors = getInteriors();

export const Interiors = () => {
  return `<h2>Interiors</h2>
    <select id="interior">
      <option value="0">Select an interior upholstery</option>
        ${interiors
          .map((material) => {
            return `<option value="${material.id}">${material.material}</option>`;
          })
          .join("")}
    </select>`;
};

document.addEventListener("change", (event) => {
  const dropdown = event.target;

  if (dropdown.id === "interior") {
    const interiorId = parseInt(event.target.value);
    const interiorMaterial = interiors.find(
      (material) => material.id === interiorId
    ).material;
    window.alert(`The customer chose ${interiorMaterial} interior`);
  }
});
