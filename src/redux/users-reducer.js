import {createSlice} from '@reduxjs/toolkit';
import {
    getUsersThunk,
    getUserByIdThunk,
    createUserThunk,
    updateUserThunk,
    deleteUserThunk,
    signinThunk,
    signupThunk,
    signoutThunk,
} from '../services/users-thunks.js';

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
    selectedUser: null,
    // isSignedIn: false,
    // isSignedUp: true,
    // isSignedOut: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsersThunk.pending]: (state, action) => {
            state.loading = true;
            state.users = []
        },

        [getUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },

        [getUsersThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },

        [getUserByIdThunk.pending]: (state, action) => {
            state.loading = true;
        },

        [getUserByIdThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.selectedUsers = action.payload;
        },

        [getUserByIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },

        [createUserThunk.fulfilled]: (state, action) => {
            state.users.push(action.payload);
        },

        [updateUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.map(user => user.id === action.payload.id ? action.payload : user);
        },

        [deleteUserThunk.fulfilled]: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id);
        },

        [signinThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [signinThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [signupThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [signupThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },

        [signoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },

    }
});

export default usersSlice.reducer;







