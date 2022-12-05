import { Interiors } from "./Interiors.js";
import { Paints } from "./Paints.js";
import { Technologies } from "./Technologies.js";
import { Wheels } from "./Wheels.js";

export const CarsRUs = () => {
  return `
  ${Paints()}
  ${Interiors()}
  ${Technologies()}
  ${Wheels()}
  <hr>
  <article>
    <button id="orderButton">Create Custom Order</button>
  </article>
  `;
};
