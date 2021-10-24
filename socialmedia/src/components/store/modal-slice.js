import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModal: false, type: '' },
    reducers: {
        toggle(state) {
            state.isModal = !state.isModal
        },
        togglePostModal(state) {
            state.isModal = !state.isModal
            state.type = 'post'
        },
        toggleAlbumModal(state) {
            state.isModal = !state.isModal
            state.type = 'album'
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;