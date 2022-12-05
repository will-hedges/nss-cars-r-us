const database = {
  colors: [
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
  seats: [
    {
      id: 1,
      seat: "Beige Fabric",
      price: 100,
    },
    {
      id: 2,
      seat: "Charcoal Fabric",
      price: 200,
    },
    {
      id: 3,
      seat: "White Leather",
      price: 300,
    },
    {
      id: 4,
      seat: "Black Leather",
      price: 400,
    },
  ],
  packages: [
    {
      id: 1,
      package: "Basic Package",
      price: 100,
    },
    {
      id: 2,
      package: "Navigation Package",
      price: 200,
    },
    {
      id: 3,
      package: "Visibility Package",
      price: 300,
    },
    {
      id: 4,
      package: "Ultra Package",
      price: 400,
    },
  ],
  wheels: [
    {
      id: 1,
      wheel: "17-inch Pair Radial",
      price: 100,
    },
    {
      id: 2,
      wheel: "17-inch Pair Radial Black",
      price: 200,
    },
    {
      id: 3,
      wheel: "18-inch Pair Spoke Silver",
      price: 300,
    },
    {
      id: 4,
      wheel: "18-inch Pair Spoke Black",
      price: 400,
    },
  ],
  customOrders: [],
  orderBuilder: {},
};

export const getColors = () => {
  return database.colors.map((color) => ({ ...color }));
};

export const getSeats = () => {
  return database.seats.map((seat) => ({ ...seat }));
};

export const getPackages = () => {
  return database.packages.map((techPackage) => ({ ...techPackage }));
};

export const getWheels = () => {
  return database.wheels.map((wheel) => ({ ...wheel }));
};
