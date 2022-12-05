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
  <div class="choice__row">
    ${Paints()}
    ${Interiors()}
  </div>
  <div class="choice__row">
    ${Technologies()}
    ${Wheels()}
  </div>
  <hr>
  <button id="orderButton">Create Custom Order</button>
  <hr>
  ${Orders()}
  `;
};
