import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDetail} from "./dogs-service";
import {useSelector} from "react-redux";
import userLikesDetail from "../services/likes-service";
import {createDetail} from "../services/details-service";

function DogsDetailScreen() {

    const [error, setError] = useState("");

    const {currentUser} = useSelector((state => state.users))
    console.log("current User is:", currentUser);

    const {id} = useParams();
    // createDetail(id);
    console.log("In dogs-detail image id is:", id);
    const [detail, setDetail] = useState({});

    const [likes, setLikes] = useState([]);
    // const fetchLikes = async () => {
    //     const likes = await findLikesByUserId(userId);
    //     setLikes(likes);
    // }

    const searchDogs = async () => {
        const response = await getDetail(id);
        setDetail(response);
    }

    // console.log("detailId line 36: ", detailId);
    const likeDetail = async () => {
        await createDetail(id);
        if (! currentUser) {
            setError("Not logged in!")
        } else {
            const response = await userLikesDetail(currentUser._id, id);
            console.log("userLikesDetail response: ", response);
        }
    }

    useEffect(() => {
        searchDogs(id);
        },[]
    );

    return (
        <div>
            <h1>Dogs detail page</h1>
            <h1>Current user: {currentUser? currentUser.firstName : "not logged in"} {currentUser? currentUser.lastName : ""} </h1>
            <h1>Current user id: {currentUser? currentUser._id :"not logged in"}</h1>
            <p>{detail.name}</p>
            <div>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
            </div>
            <div>
            <button className="btn btn-success mt-2" onClick={likeDetail}> <i className="bi bi-heart">{likes}</i></button>
            <button className="btn btn-danger mt-2"><i className="bi bi-hand-thumbs-down"></i></button>
            </div>
            {/*<pre>{JSON.stringify(detail, null, 2)}</pre>*/}
        </div>
    )
}

export default DogsDetailScreen;