import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import whoReducer from './who-reducer';
import usersReducer from './users-reducer';
import postReducer from "./post-reducer";
import eventsReducer from "./events-reducer";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    who: whoReducer,
    users: usersReducer,
    posts: postReducer,
    events: eventsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            // Allow non-serializable values from redux-persist actions
            ignoredActions: ['persist/PERSIST'],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };