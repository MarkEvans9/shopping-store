import { combineReducers } from "redux";
import UpdateCart from "./UpdateCart";
import cartUpdate from "./CartUpdate";

const reducers = combineReducers({
  items: UpdateCart,
  cartItems: cartUpdate,
});

export default reducers;
