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
