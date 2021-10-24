import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import modalReducer from './modal-slice';
import userReducer from './user-slice';

const store = configureStore({
    reducer: { auth: authReducer, modal: modalReducer, user: userReducer }
});

export default store;