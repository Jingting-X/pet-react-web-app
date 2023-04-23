import {createSlice} from "@reduxjs/toolkit";
import {
    addCommentThunk,
    createPostThunk,
    deletePostThunk,
    findPostsThunk,
    findPostsThunkByUser,
    updatePostThunk
} from "../services/post-thunk";


const initialState = {
    users: [],
    posts: [],
    loading: false,
    error: null,
    currentUser: null,
}

const templatePost = {
    ...initialState.currentUser,
    "likes": 0,
    "liked": false,
}

const postSlice = createSlice({
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
        [findPostsThunkByUser.pending]:
            (state) => {
                state.loading = true
                state.posts = []
            },
        [findPostsThunkByUser.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.posts = payload;
            },
        [findPostsThunkByUser.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [addCommentThunk.fulfilled]: (state, {payload}) => {
            const {post, comment} = payload;
            console.log("--------k");
            console.log(comment);
            const postIndex = state.posts.findIndex((p) => p._id === post._id);
            if (postIndex !== -1) {
                state.posts[postIndex] = post;
                state.posts[postIndex].comments.push(comment);
            }
        }
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
export const {createPost, deletePost, likeToggle} = postSlice.actions;
export default postSlice.reducer;