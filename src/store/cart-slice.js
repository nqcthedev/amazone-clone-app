import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0,
//   },
//   reducers: {
//     addItemToCart(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       console.log(existingItem)
//       console.log(newItem)
//       state.totalQuantity++;
//       if (!existingItem) {
//         state.items.push({
//           id: newItem.id,
//           price: newItem.price,
//           totalPrice: newItem.price,
//           title: newItem.title,
//           description: newItem.description,
//           image: newItem.image,
//           rating: newItem.rating,
//           hasPrice: newItem.hasPrice,
//         });
//       } else {
//           existingItem.quantity++;
//           existingItem.totalPrice = existingItem.totalPrice + newItem.price;
//       }

//     },
//     removeItemFromCart(state, action) {
//         const id = action.payload;
//         const existingItem = state.items.find(item => item.id === id);
//         console.log(id);
//         console.log(existingItem)
//         state.totalQuantity--;
//         state.changed = true
//         if (existingItem.quantity === 1) {
//             state.items = state.items.filter(item => item.id !== id);
//         } else {
//             existingItem.quantity--;
//             existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
//         }
//     }
//   },
// });

// export const cartActions = cartSlice.actions
// export default cartSlice;

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.payload.id}`);
      }
      state.items = newCart;
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export const selectedItem = (state) => state.cart.items;
export const selectedTotal = (state) => state.cart.items.reduce((total, item) => total + item.price, 0);
export default cartSlice.reducer;
