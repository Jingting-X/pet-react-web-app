import { configureStore } from '@reduxjs/toolkit';
import whoReducer from './who-reducer';
import usersReducer from './users-reducer';

const store = configureStore({
    reducer: {
        who: whoReducer, 
        users: usersReducer}
});

export default store;
