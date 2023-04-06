import axios from "axios";
const DOGS_API = "https://api.thedogapi.com";
const DOGS_KEY = process.env.REACT_APP_THE_DOG_API_KEY;

export const fullTextSearch = async (query) => {
    const breed = query.toLowerCase();
    const breed_names_res = await axios.get(`${DOGS_API}/v1/breeds`, {
        headers: DOGS_KEY
    })

    const breed_list = breed_names_res.data;

    const ids = breed_list.filter(b =>
        b['name'].toString().toLowerCase().includes(breed) ||
        (b['breed_group'] && b['breed_group'].toString().toLowerCase().includes(breed)) ||
        (b['temperament'] && b['temperament'].toString().toLowerCase().includes(breed)) ||
        (b['origin'] && b['origin'].toString().toLowerCase().includes(breed)) ||
        (b['bred_for'] && b['bred_for'].toString().toLowerCase().includes(breed))).map(b => b['id']).join(',');

    console.log("breed_id is: ", ids);

    const response = await axios.get(
        `${DOGS_API}/v1/images/search/?include_breed=1&limit=25&breed_ids=` + ids, {
            headers: DOGS_KEY
        }
    );
    console.log("Response is:", response.data);
    return response.data;
};