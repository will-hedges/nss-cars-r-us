import {
  getBodies,
  getInteriors,
  getOrders,
  getPaints,
  getTechnologies,
  getWheels,
} from "./database.js";

const [bodies, interiors, paints, technologies, wheels] = [
  getBodies(),
  getInteriors(),
  getPaints(),
  getTechnologies(),
  getWheels(),
];

const buildOrderListItem = (order) => {
  const foundBody = bodies.find((body) => {
    return body.id === order.bodyId;
  });

  const foundInterior = interiors.find((interior) => {
    return interior.id === order.interiorId;
  });

  const foundPaint = paints.find((paint) => {
    return paint.id === order.paintId;
  });

  const foundTech = technologies.find((tech) => {
    return tech.id === order.techId;
  });

  const foundWheel = wheels.find((wheel) => {
    return wheel.id === order.wheelId;
  });

  let orderPrice =
    foundInterior.price + foundPaint.price + foundTech.price + foundWheel.price;

  orderPrice *= foundBody.priceMultiplier;

  orderPrice = orderPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return `
  <li class="order__item">
    ${foundPaint.color} ${foundBody.type} with ${foundWheel.style} wheels, ${foundInterior.material} interior and the ${foundTech.name} for a total cost of ${orderPrice}.
  </li>`;
};

export const Orders = () => {
  const orders = getOrders();
  return `<h2>Custom Car Orders</h2>
    <ul class="orders__list">
      ${orders.map(buildOrderListItem).join("")}
    </ul>`;
};
