import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

export const userDislikesDetail = async (userId, detailId) => {
     const response = await axios.post(`${USERS_API}/${userId}/dislikes/details/${detailId}`);
     return response.data;
 }

export const findDislikesByUserId = async (userId) => {
     const response = await axios.get(`${USERS_API}/${userId}/dislikes`);
     return response.data;
 }

export const findDislikedOrNotByUser = async (userId, detailId) => {
    const response = await axios.get(`${USERS_API}/${userId}/dislikes/details/check/${detailId}`);
    return response.data;
}
