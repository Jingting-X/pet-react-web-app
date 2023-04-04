import {createSlice} from "@reduxjs/toolkit";
import {createPostThunk, deletePostThunk, findPostsThunk, updatePostThunk} from "../../services/post-thunk";

const initialState = {
    posts: [],
    loading: false
}

const currentUser = {
    "userName": "Collie",
    "handle": "@collie",
    "image": "collie.jpeg",
};

const templatePost = {
    ...currentUser,
    "topic": "Pet",
    "time": "2h",
    "liked": false,
    "comments": 0,
    "reposts": 0,
    "likes": 0,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [findPostsThunk.pending]:
            (state) => {
                state.loading = true
                state.posts = []
            },
        [findPostsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.posts = payload
            },
        [findPostsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [updatePostThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const postNdx = state.posts
                    .findIndex((t) => t._id === payload._id)
                state.posts[postNdx] = {
                    ...state.posts[postNdx],
                    ...payload
                }
            },
        [createPostThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                const newPost = {
                    ...payload,
                    ...templatePost,
                };
                state.posts.push(newPost)
            },

        [deletePostThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.posts = state.posts
                    .filter(t => t._id !== payload)
            },
    },
    reducers: {
        deletePost(state, action) {
            const index = state
                .findIndex(post =>
                    post._id === action.payload);
            state.splice(index, 1);
        },
        createPost(state, action) {
            state.unshift({
                ...action.payload,
                ...templatePost,
                _id: (new Date()).getTime(),
            })
        },
        likeToggle(state, action) {
            const post = state.find((post) =>
                post._id === action.payload._id)
            post.liked = !post.liked;
            if (post.liked) {
                post.likes++;
            } else {
                post.likes--;
            }
        }
    }
});
export const {createPost, deletePost, likeToggle} = postsSlice.actions;
export default postsSlice.reducer;