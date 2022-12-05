import { addCustomOrder } from "./database.js";
import { Interiors } from "./Interiors.js";
import { Orders } from "./Orders.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "orderButton") {
    addCustomOrder();
  }
});

export const CarsRUs = () => {
  return `
  <h1>Cars-R-Us: Personal Car Builder</h1>
  <article class="choices">
    <div class="option-container">
      ${Paints()}
      ${Wheels()}
    </div>
    <div class="section-break"></div>
    <div class="option-container">
      ${Interiors()}
      ${Technologies()}
    </div>
  </article>
  <button id="orderButton">Place Car Order</button>
  <article class="orders">
    ${Orders()}
  </article>
  `;
};
