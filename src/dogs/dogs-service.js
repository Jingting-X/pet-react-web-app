import axios from "axios";
const DOGS_API = "https://api.thedogapi.com";
const DOGS_KEY = process.env.REACT_APP_THE_DOG_API_KEY;

export const fullTextSearch = async (query) => {
    const breed = query.toLowerCase();
    const breed_names_res = await axios.get(`${DOGS_API}/v1/breeds`, {
        headers: DOGS_KEY
    })

    const breed_list = breed_names_res.data;
    const breed_map = new Map(breed_list.map(i => [i.image.id, i.name]))
    // console.log("breed map is:", breed_map);

    let ids = breed_list.filter(b =>
        b['name'].toString().toLowerCase().includes(breed) ||
        (b['breed_group'] && b['breed_group'].toString().toLowerCase().includes(breed)) ||
        (b['temperament'] && b['temperament'].toString().toLowerCase().includes(breed)) ||
        (b['origin'] && b['origin'].toString().toLowerCase().includes(breed)) ||
        (b['bred_for'] && b['bred_for'].toString().toLowerCase().includes(breed)));

    let matching_ids = [];
    let response = "";
    if (ids.length) {

        ids.map((dog) => {
            matching_ids.push(dog.id)
            // console.log("matching_ids is:", matching_ids);
        })

        response = await axios.get(
            `${DOGS_API}/v1/images/search/?include_breed=1&limit=25&breed_ids=` + matching_ids, {
                headers: DOGS_KEY
            }
        );
    } else {
        console.log("no matching ids");
        response = await axios.get(
            `${DOGS_API}/v1/images/search/?include_breed=1&limit=25&breed_ids=` + ids, {
                headers: DOGS_KEY
            }
        );
    }
    const result = response.data;
    return result;
};

export const getDetail = async (imageID) => {
    const breed_names_res = await axios.get(`${DOGS_API}/v1/breeds`, {
        headers: DOGS_KEY
    })

    const breed_map = new Map(breed_names_res.data.map(i => [i.image.id, i.id]))
    let dogID = "test";
    breed_map.forEach((k, v) => {
        const id = v.toString();
        if (id === imageID) {

            console.log("in match loop")
            dogID = k;
        }
    });
    console.log("dogID is:", dogID);
    const breed_detail_res = await axios.get(`${DOGS_API}/v1/breeds/${dogID}`, {
        headers: DOGS_KEY
    })

    // console.log("Breed detail is", breed_detail_res.data);

    return breed_detail_res.data;
};

