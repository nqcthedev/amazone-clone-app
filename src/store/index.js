import { configureStore } from "@reduxjs/toolkit";

import cartReducer from './cart-slice'
import  useReducer  from "./user-slice";

const store = configureStore({
  reducer: {
      cart: cartReducer, user: useReducer,
  },
});

export default store;
