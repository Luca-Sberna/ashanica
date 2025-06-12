// src/redux/slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, // { name, email, password }
    isAuthenticated: false,
    isAdmin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload; // payload: { name, email, password }
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { loginSuccess, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
