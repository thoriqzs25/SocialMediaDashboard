import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModal: false, type: '', post: {} },
    reducers: {
        toggle(state) { //untuk keluar modal
            state.isModal = !state.isModal
            state.type = ''
        },
        togglePostModal(state) { //untuk ganti home sm user
            state.isModal = !state.isModal
        },
        togglePostListModal(state) { //untuk buka modal postlist
            state.isModal = !state.isModal
            state.type = 'postList'
        },
        toggleAlbumModal(state) { //untuk buka modal album
            state.isModal = !state.isModal
            state.type = 'album'
        },
        switchPostModal(state, action) { //untuk pindah dari postlist ke post spesifik
            state.type = action.payload.type
            state.post = action.payload.post
        },
        switchTogglePostModal(state, action) { //untuk buka langsung modal post
            state.isModal = true
            state.type = action.payload.type
            state.post = action.payload.post
        },
        switchAddPostComment(state, action) {
            state.type = action.payload
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;