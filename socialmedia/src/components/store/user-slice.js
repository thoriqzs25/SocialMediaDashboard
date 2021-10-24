import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userId: 0 },
    reducers: {
        changeUser(state, action) {
            state.userId = action.payload
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;