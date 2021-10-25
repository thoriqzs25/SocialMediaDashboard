import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice';
import modalReducer from './modal-slice';
import userReducer from './user-slice';
import searchReducer from './search-slice';

const store = configureStore({
    reducer: { auth: authReducer, modal: modalReducer, user: userReducer, search: searchReducer }
});

export default store;