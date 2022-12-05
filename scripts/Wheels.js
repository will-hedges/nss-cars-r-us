import { getWheels, setWheel } from "./database.js";

const wheels = getWheels();

export const Wheels = () => {
  return `<section class="choices__wheels options">
  <h2>Wheels</h2>
    <select id="wheel">
      <option value="0">Select a wheel style</option>
        ${wheels
          .map((wheel) => {
            return `<option value="${wheel.id}">${wheel.style}</option>`;
          })
          .join("")}
    </select>
  </section>`;
};

document.addEventListener("change", (event) => {
  if (event.target.id === "wheel") {
    setWheel(parseInt(event.target.value));
  }
});
