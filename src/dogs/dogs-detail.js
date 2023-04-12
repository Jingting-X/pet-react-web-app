import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fullTextSearch, getDetail} from "./dogs-service";

function DogsDetailScreen() {
    const {id} = useParams();
    console.log("In dogs-detail image id is:", id);
    const [detail, setDetail] = useState({});

    const searchDogs = async () => {
        const response = await getDetail(id);
        setDetail(response);
    }

    useEffect(() => {
        searchDogs(id);
        },[]
    );

    return (
        <div>
            <h1>Dogs detail page</h1>
            <p>{detail.name}</p>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
            {/*<pre>{JSON.stringify(detail, null, 2)}</pre>*/}
        </div>
    )
}

export default DogsDetailScreen;