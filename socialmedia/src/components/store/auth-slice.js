import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { subPage: false, currPage: 'home' },
    reducers: {
        toggleHome(state) { // tadinya page 1
            state.subPage = false
        },
        toggleSubPage(state) { // tadinya toggle
            state.subPage = true
        },
        navigate(state, action) {
            state.currPage = action.payload
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;