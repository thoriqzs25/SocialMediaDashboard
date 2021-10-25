import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, currPage: 'home' },
    reducers: {
        toggle(state) {
            state.isAuthenticated = true
        },
        togglePage1(state) {
            state.isAuthenticated = false
        },
        navigate(state, action) {
            state.currPage = action.payload
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;