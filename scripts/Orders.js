import {
  getInteriors,
  getOrders,
  getPaints,
  getTechnologies,
  getWheels,
} from "./database.js";

const [interiors, paints, technologies, wheels] = [
  getInteriors(),
  getPaints(),
  getTechnologies(),
  getWheels(),
];

const buildOrderListItem = (order) => {
  const interiorPrice = interiors.find((interior) => {
    return interior.id === order.interiorId;
  }).price;

  const paintPrice = paints.find((paint) => {
    return paint.id === order.paintId;
  }).price;

  const technologyPrice = technologies.find((tech) => {
    return tech.id === order.techId;
  }).price;

  const wheelPrice = wheels.find((wheel) => {
    return wheel.id === order.wheelId;
  }).price;

  let orderPrice = interiorPrice + paintPrice + technologyPrice + wheelPrice;

  return `
  <li>
    Order #${order.id} was placed at ${order.timestamp}
  </li>`;
};

export const Orders = () => {
  const orders = getOrders();
  return `<h2>Custom Car Orders</h2>
  <ul>
    ${orders.map(buildOrderListItem)}
  </ul>`;
};
