// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  items: [], // array di prodotti: { id, name, price, description, image, featured, carousel }
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(product) {
        return {
          payload: {
            ...product,
            id: nanoid(),
            featured: false,
            carousel: false,
          },
        };
      },
    },
    removeProduct(state, action) {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    toggleFeatured(state, action) {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) product.featured = !product.featured;
    },
    toggleCarousel(state, action) {
      const product = state.items.find((p) => p.id === action.payload);
      if (product) product.carousel = !product.carousel;
    },
    updateProduct(state, action) {
      const { id, updatedFields } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) {
        Object.assign(product, updatedFields);
      }
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
    },
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  toggleFeatured,
  toggleCarousel,
  updateProduct,
  decreaseQuantity,
  setProducts,
} = productSlice.actions;

export default productSlice.reducer;
