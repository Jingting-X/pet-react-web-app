import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";
// const LIKES_API = "http://localhost:4000/api/likes";

export const userLikesDetail = async (userId, detailId) => {
     const response = await axios.post(`${USERS_API}/${userId}/likes/details/${detailId}`);
     return response.data;
 }

export const findLikesByUserId = async (userId) => {
     const response = await axios.get(`${USERS_API}/${userId}/likes`);
     return response.data;
 }

export const findLikedOrNotByUser = async (userId, detailId) => {
    const response = await axios.get(`${USERS_API}/${userId}/likes/details/check/${detailId}`);
    return response.data;
}

export const userRevertLikesDetail = async (userId, detailId) => {
    const response = await axios.delete(`${USERS_API}/${userId}/likes/details/${detailId}`);
    return response.data;
}
