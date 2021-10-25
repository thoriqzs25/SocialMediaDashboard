import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: { search: '' },
    reducers: {
        search(state, action) {
            state.search = action.payload
        }
    }
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;