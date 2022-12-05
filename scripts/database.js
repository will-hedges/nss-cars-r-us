const database = {
  paints: [
    {
      id: 1,
      color: "Silver",
      price: 100,
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 200,
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 300,
    },
    {
      id: 4,
      color: "Spring Green",
      price: 400,
    },
  ],
  interiors: [
    {
      id: 1,
      material: "Beige Fabric",
      price: 100,
    },
    {
      id: 2,
      material: "Charcoal Fabric",
      price: 200,
    },
    {
      id: 3,
      material: "White Leather",
      price: 300,
    },
    {
      id: 4,
      material: "Black Leather",
      price: 400,
    },
  ],
  technologies: [
    {
      id: 1,
      name: "Basic Package",
      price: 100,
    },
    {
      id: 2,
      name: "Navigation Package",
      price: 200,
    },
    {
      id: 3,
      name: "Visibility Package",
      price: 300,
    },
    {
      id: 4,
      name: "Ultra Package",
      price: 400,
    },
  ],
  wheels: [
    {
      id: 1,
      style: "17-inch Pair Radial",
      price: 100,
    },
    {
      id: 2,
      style: "17-inch Pair Radial Black",
      price: 200,
    },
    {
      id: 3,
      style: "18-inch Pair Spoke Silver",
      price: 300,
    },
    {
      id: 4,
      style: "18-inch Pair Spoke Black",
      price: 400,
    },
  ],
  customOrders: [],
  orderBuilder: {},
};

export const getInteriors = () => {
  return database.interiors.map((material) => ({ ...material }));
};

export const getOrders = () => {
  return database.customOrders.map((customOrder) => ({ ...customOrder }));
};

export const getPaints = () => {
  return database.paints.map((color) => ({ ...color }));
};

export const getTechnologies = () => {
  return database.technologies.map((name) => ({ ...name }));
};

export const getWheels = () => {
  return database.wheels.map((style) => ({ ...style }));
};

export const setInterior = (id) => {
  database.orderBuilder.interiorId = id;
};

export const setPaint = (id) => {
  database.orderBuilder.paintId = id;
};

export const setTechnology = (id) => {
  database.orderBuilder.techId = id;
};

export const setWheel = (id) => {
  database.orderBuilder.wheelId = id;
};

export const addCustomOrder = () => {
  const newOrder = { ...database.orderBuilder };

  const lastIndex = database.customOrders.length;
  newOrder.id = lastIndex + 1;

  newOrder.timestamp = Date.now();

  database.customOrders.push(newOrder);
  database.orderBuilder = {};

  document.dispatchEvent(new CustomEvent("stateChanged"));
};
