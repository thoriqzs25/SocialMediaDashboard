import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userId: -1, name: '', username: '', email: '' },
    reducers: {
        changeUser(state, action) {
            state.userId = action.payload.id
            state.name = action.payload.name
            state.username = action.payload.username
            state.email = action.payload.email
        },
        logoutReducer(state) {
            state.userId = -1
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;