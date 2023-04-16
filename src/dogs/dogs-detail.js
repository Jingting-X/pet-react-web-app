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
    const loggedIn = currentUser != null;
    const checkLiked = async() => {
        if (loggedIn) {
            const res = await service.findLikedOrNotByUser(currentUser._id, id);
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
        if (loggedIn) {
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

    const searchDogs = async () => {
        const response = await getDetail(id);
        setDetail(response);
    }

    const likeDetail = async () => {
        if (! loggedIn) {
            setError("Not logged in!")
        } else {
            const response = await service.userLikesDetail(currentUser._id, id);
            setLiked(true);
            console.log("userLikesDetail response: ", response);
        }
    }

    const dislikeDetail = async () => {
        if (! loggedIn) {
            setError("Not logged in!")
        } else {
            const response = await dislikeService.userDislikesDetail(currentUser._id, id);
            setDisliked(true)
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
            {/*<h1 className="display-3">Dogs detail page</h1>*/}
            <p className="display-3">{detail.name}</p>
            <div>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
            </div>
            <div>
                <h1 className="display-5">{loggedIn? `Hi ${currentUser.firstName} Like it or not?` : "Ops! You need to log in to like or dislike!"} </h1>
            <button className="btn btn-success mt-2" onClick={likeDetail}>{liked? <i className="bi bi-heart-fill"/>: <i className="bi bi-heart"/>}</button>
            <button className="btn btn-danger mt-2 ms-2" onClick={dislikeDetail}>{disliked? <i className="bi bi-heartbreak-fill"/>: <i className="bi bi-heartbreak"/>}</button>
            </div>
        </div>
    )
}

export default DogsDetailScreen;