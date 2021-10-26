import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isModal: false, type: '', post: {} },
    reducers: {
        reset(state) { //untuk keluar modal TOGGLE
            state.isModal = !state.isModal
            state.type = ''
            state.post = {}
        },
        toggle(state) { //untuk ganti home sm user TOGGLE POST MODAL
            state.isModal = true
        },
        switch(state, action) { //untuk pindah dari postlist ke post spesifik SWITCH POST MODAL
            state.post = action.payload.post // type sama is modalnya panggil lagi aja INI POST TADINYA
            state.type = action.payload.type // post nya pake reducer 1 lagi aja INI TYPE TADINYA

        },
        openModal(state, action) { // SWITCH CREATE POST
            state.isModal = true
            state.type = action.payload
        }
    }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;