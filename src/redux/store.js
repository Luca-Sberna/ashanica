// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"; // <-- importa lo userSlice

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

const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["user", "isAuthenticated", "isAdmin"],
    transforms: [
        {
            in: (inboundState) => {
                if (inboundState && inboundState.user) {
                    const { password, ...rest } = inboundState.user;
                    return { ...inboundState, user: rest };
                }
                return inboundState || {}; // fallback sicuro
            },
            out: (outboundState) => outboundState,
        },
    ],
};


const persistedProductReducer = persistReducer(productPersistConfig, productReducer);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer); // <-- persist user

export const store = configureStore({
    reducer: {
        products: persistedProductReducer,
        cart: persistedCartReducer,
        user: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
