import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";
const LIKES_API = "http://localhost:4000/api/likes";

 const userLikesDetail = async (userId, detailId) => {
     console.log("detailId is:", detailId)
     const response = await axios.post(`${USERS_API}/${userId}/likes/details/${detailId}`);
     return response.data;
 }

 const findLikesByUserId = async (userId) => {
     const response = await axios.get(`${USERS_API}/${userId}/likes`);
     return response.data;
 }

 export default userLikesDetail;