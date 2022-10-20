const cartUpdate = (state = [], action) => {
  switch (action.type) {
    case "Add_cart":
      // return state.push(action.payload);
      return [...state, action.payload];

    case "Remove_from_cart":
      return state.filter((item, i) => i !== action.payload);

    default:
      return state;
  }
};

export default cartUpdate;
