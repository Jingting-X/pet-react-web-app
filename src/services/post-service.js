import axios from 'axios';

const POSTS_API = 'http://localhost:4000/api/posts';

export const createPost = async (post) => {
    const response = await axios.post(POSTS_API, post)
    return response.data;
}

export const findPosts = async () => {
    const response = await axios.get(POSTS_API);
    return response.data;
}

export const deletePost = async (pid) => {
    const response = await axios
        .delete(`${POSTS_API}/${pid}`)
    return response.data
}

export const updatePost = async (post) => {
    await axios
        .put(`${POSTS_API}/${post._id}`, post);
    return post;
}
