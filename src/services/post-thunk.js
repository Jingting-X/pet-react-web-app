import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./post-service";

export const createPostThunk = createAsyncThunk(
    'posts/createPost',
    async (post) => {
        return await service.createPost(post)
    })

export const findPostsThunk = createAsyncThunk(
    'posts/findPosts', async () =>
        await service.findPosts()
)
export const deletePostThunk = createAsyncThunk(
    'posts/deletePost',
    async (postId) => {
        await service.deletePost(postId)
        return postId
    })

export const updatePostThunk =
    createAsyncThunk(
        'posts/updatePost',
        async (post) =>
            await service.updatePost(post)
    )

export const findPostsThunkByUser = createAsyncThunk(
    'posts/findPostsByUser', async (userId) =>
        await service.findPostsByUser(userId)
)

export const findPostById = createAsyncThunk(
    'posts/findPostById', async (postId) =>
        await service.findPostById(postId)
)

export const addCommentThunk = createAsyncThunk(
    'posts/addComment',
    async ({ postId, comment }) => {
        await service.addComment(postId, comment);
        const post = await service.findPostById(postId);
        return { post, comment };
    }
);

export const getCommentsThunk = createAsyncThunk(
    'posts/getComments', async ({ pid }) =>
        await service.getComments(pid)
)