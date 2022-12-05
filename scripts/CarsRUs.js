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
  ${Paints()}
  ${Interiors()}
  ${Technologies()}
  ${Wheels()}
  <hr>
  <button id="orderButton">Create Custom Order</button>
  <hr>
  ${Orders()}
  `;
};
