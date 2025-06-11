import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/ProductSlice";
import cartReducer from "../redux/cartSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const productPersistConfig = {
    key: "products",
    storage,
    whitelist: ["items"],
};

const cartPersistConfig = {
    key: "cart",
    storage,
    whitelist: ["items"],
};

const persistedProductReducer = persistReducer(productPersistConfig, productReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        products: persistedProductReducer,
        cart: persistedCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
