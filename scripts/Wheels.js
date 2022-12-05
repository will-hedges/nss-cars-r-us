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

document.addEventListener("change", (event) => {
  const dropdown = event.target;

  if (dropdown.id === "wheel") {
    const wheelId = parseInt(event.target.value);
    const wheelStyle = wheels.find((wheel) => wheel.id === wheelId).style;
    window.alert(`The customer chose ${wheelStyle} wheels`);
  }
});
