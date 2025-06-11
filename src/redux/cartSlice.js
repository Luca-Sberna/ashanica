import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [], // { id, name, price, quantity }
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseQuantity(state, action) {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Rimuove l'item se quantità è 1 e deve diminuire
                    state.items = state.items.filter(i => i.id !== action.payload);
                }
            }
        },
        removeFromCart(state, action) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
