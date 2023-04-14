import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getDetail} from "./dogs-service";
import {useSelector} from "react-redux";
import * as service from "../services/likes-service";
import * as dislikeService from "../services/dislikes-service";

function DogsDetailScreen() {

    const [error, setError] = useState("");
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const {id} = useParams();
    const {currentUser} = useSelector((state => state.users))
    const checkLiked = async() => {
        if (currentUser != null) {
            const res = await service.findLikedOrNotByUser(currentUser._id, id);
            console.log("pringing res:", res);
            console.log("pringing res.length:", res.length);
            if (res.length > 0) {
                setLiked(true);
            } else {
                setLiked(false);
            }
        } else {
            setLiked(false);
        }
    }

    const checkDisliked = async() => {
        if (currentUser != null) {
            const res = await dislikeService.findDislikedOrNotByUser(currentUser._id, id);
            if (res.length > 0) {
                setDisliked(true);
            } else {
                setDisliked(false);
            }
        } else {
            setDisliked(false);
        }
    }

    const [detail, setDetail] = useState({});

    // const [likes, setLikes] = useState([]);

    const searchDogs = async () => {
        const response = await getDetail(id);
        setDetail(response);
    }
    // await createDetail(id);
    // console.log("222222");
    const likeDetail = async () => {
        if (! currentUser) {
            setError("Not logged in!")
        } else {
            const response = await service.userLikesDetail(currentUser._id, id);
            console.log("userLikesDetail response: ", response);
        }
    }

    const dislikeDetail = async () => {
        if (! currentUser) {
            setError("Not logged in!")
        } else {
            const response = await dislikeService.userDislikesDetail(currentUser._id, id);
            console.log("userDislikesDetail response: ", response);
        }
    }

    useEffect(() => {
        searchDogs(id);
        checkLiked();
        checkDisliked();
        },[]
    );
    console.log("liked is:", liked);
    console.log("disliked is:", disliked);

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
            <button className="btn btn-success mt-2" onClick={likeDetail}>{liked? <i className="bi bi-heart-fill"/>: <i className="bi bi-heart"/>}</button>
            <button className="btn btn-danger mt-2" onClick={dislikeDetail}>{disliked? <i className="bi bi-hand-thumbs-down-fill"/>: <i className="bi bi-hand-thumbs-down"/>}</button>
            </div>
            {/*<pre>{JSON.stringify(detail, null, 2)}</pre>*/}
        </div>
    )
}

export default DogsDetailScreen;