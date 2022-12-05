import { getWheels } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
  return `<h2>Wheels</h2>
    <select id="wheel">
      <option value="0">Select a wheel style</option>
        ${wheels
          .map((wheel) => {
            return `<option value="${wheel.id}">${wheel.style}</option>`;
          })
          .join("")}
    </select>`;
};
