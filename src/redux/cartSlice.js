import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.items.find(
                i => i.id === action.payload.id &&
                     i.color === action.payload.color &&
                     i.size === action.payload.size
              );
                          if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQuantity(state, action) {
            const { id, color, size } = action.payload;
            const item = state.items.find(
                i => i.id === id && i.color === color && i.size === size
            );
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(
                        i => !(i.id === id && i.color === color && i.size === size)
                    );
                }
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(
                i =>
                  !(
                    i.id === action.payload.id &&
                    i.color === action.payload.color &&
                    i.size === action.payload.size
                  )
              );
                      },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
