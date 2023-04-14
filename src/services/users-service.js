import axios from "axios";
const SERVER_API_URL = "http://localhost:4000/api";
const USERS_API_BASE_URL = `${SERVER_API_URL}/users`;

const api = axios.create({withCredentials: true});

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
    try {
        const response = await api.post(`${USERS_API_BASE_URL}/signin`, user);
        return response.data;
    }  catch (error) {
        throw new Error(error.response.data.message);
    }
    
}

export const signup = async (user) => {
    try {
        const response = await axios.post(`${USERS_API_BASE_URL}/signup`, user);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const signout = async () => {
    const response = await axios.get(`${USERS_API_BASE_URL}/signout`);
    return response.data;
}
