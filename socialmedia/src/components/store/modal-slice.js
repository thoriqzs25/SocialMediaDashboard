import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModal: false },
    reducers: {
        toggle(state) {
            state.isModal = !state.isModal
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;