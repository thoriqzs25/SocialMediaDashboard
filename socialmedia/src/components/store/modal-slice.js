import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModal: false, type: '', post: {} },
    reducers: {
        toggle(state) {
            state.isModal = !state.isModal
            state.type = ''
        },
        togglePostModal(state) {
            state.isModal = !state.isModal
        },
        togglePostListModal(state) {
            state.isModal = !state.isModal
            state.type = 'postList'
        },
        toggleAlbumModal(state) {
            state.isModal = !state.isModal
            state.type = 'album'
        },
        switchPostModal(state, action) {
            state.type = action.payload.type
            state.post = action.payload.post
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;