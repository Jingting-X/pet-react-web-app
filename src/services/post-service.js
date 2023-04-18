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
    return response.data;
}

export const updatePost = async (post) => {
    await axios
        .put(`${POSTS_API}/${post._id}`, post);
    return post;
}


export const findPostsByUser = async (userId) => {
    const response = await axios.get(`${POSTS_API}/user/${userId}`);
    return response.data;
}

export const findPostById = async (pid) => {
    const response = await axios.get(`${POSTS_API}/id/${pid}`);
    return response.data;
}

export const addComment = async (pid, comment) => {
    const response = await axios.post(`${POSTS_API}/id/${pid}/comments`, {comment});
    return response.data.post;
}

export const getComments = async (pid) => {
    const response = await axios.get(`${POSTS_API}/id/${pid}/comments`);
    return response.data;
}