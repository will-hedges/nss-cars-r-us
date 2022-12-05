import { getInteriors } from "./database.js";

const interiors = getInteriors();

export const Interiors = () => {
  return `<h2>Interiors</h2>
  <select>
    <option value="0">Select an interior upholstery</option>
      ${interiors
        .map((material) => {
          return `<option value="${material.id}">${material.material}</option>`;
        })
        .join("")}
  </select>`;
};
