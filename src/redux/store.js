import {configureStore} from '@reduxjs/toolkit';
import whoReducer from './who-reducer';
import usersReducer from './users-reducer';
import postReducer from "./post-reducer";

const store = configureStore({
        reducer: {
            who: whoReducer,
            users: usersReducer,
            posts: postReducer
        }
    })
;

export default store;