import axios from 'axios';

const DETAIL_API = "http://localhost:4000/dogs/search/detail";

export const createDetail = async (imageId) => {
    try {
        console.log("createDetail in detail-service get called");
        console.log("imageId",imageId);
        // require('axios-debug-log');
        const response = await axios.post(`${DETAIL_API}/${imageId}`, {imageId: imageId}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        ).then(response => {
            console.log(response.data);
        });
        console.log("response.data is:", response.data);
        return response.data;
    } catch (error) {
        console.log("error is:", error);
        throw new Error(error.response);
    }
}

export const updateDetail = async (detail) => {
    console.log("updating detail to be", detail);
    await axios
        .put(`${DETAIL_API}/${detail._id}`, detail);
    return detail;
}