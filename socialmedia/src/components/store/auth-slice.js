import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, currPage: 'home' },
    reducers: {
        toggle(state) {
            state.isAuthenticated = !state.isAuthenticated
        },
        navigate(state, payload) {
            state.currPage = payload
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;