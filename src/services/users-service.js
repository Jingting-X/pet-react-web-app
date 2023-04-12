import axios from "axios";
const USERS_API_BASE_URL = "http://localhost:4000/api/users";

export const getUsers = async () => {
    const response = await axios.get(USERS_API_BASE_URL);
    return response.data;
}

export const getUserById = async (id) => {
    const response = await axios.get(`${USERS_API_BASE_URL}/${id}`);
    return response.data;
}

export const createUser = async (user) => {
    const response = await axios.post(USERS_API_BASE_URL, user);
    return response.data;
}

export const updateUser = async (user) => {
    const response = await axios.put(`${USERS_API_BASE_URL}/${user.id}`, user);
    return response.data;
}

export const deleteUser = async (id) => {
    const response = await axios.delete(`${USERS_API_BASE_URL}/${id}`);
    return response.data;
}

export const signin = async (user) => {
    const response = await axios.post(`${USERS_API_BASE_URL}/signin`, user);
    return response.data;
}

export const signup = async (user) => {
    const response = await axios.post(`${USERS_API_BASE_URL}/signup`, user);
    if(response.status === 409) {
        return {error: "Email already exists"};
    }
    return response.data;
}

export const signout = async () => {
    const response = await axios.get(`${USERS_API_BASE_URL}/signout`);
    return response.data;
}
