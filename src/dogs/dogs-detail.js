import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fullTextSearch, getDetail} from "./dogs-service";
import {useSelector} from "react-redux";

function DogsDetailScreen() {
    const {currentUser} = useSelector((state => state.users))
    console.log("current User is:", currentUser);
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
            <h1>Current user: {currentUser.firstName} {currentUser.lastName}</h1>
            <h1>Current user id: {currentUser._id}</h1>
            <p>{detail.name}</p>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
            <div>
            <button className="btn btn-success">Like</button>
            <button className="btn btn-danger">Dislike</button>
            </div>
            {/*<pre>{JSON.stringify(detail, null, 2)}</pre>*/}
        </div>
    )
}

export default DogsDetailScreen;