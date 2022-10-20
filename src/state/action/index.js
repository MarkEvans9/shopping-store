export const increment = () => {
  return { type: "increment" };
};
export const decrement = () => {
  return { type: "decrement" };
};

export const addItem = (item) => {
  return {
    type: "Add_cart",
    payload: item,
  };
};

export const removeItem = (item) => {
  return {
    type: "Remove_from_cart",
    payload: item,
  };
};
