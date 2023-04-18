import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getDetail} from "./dogs-service";
import {useSelector} from "react-redux";
import * as service from "../services/likes-service";
import * as dislikeService from "../services/dislikes-service";
import Modal from "../components/modal.js";

function DogsDetailScreen() {
    const [showModal, setShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const closeModal = () => {
        setShowModal(false);
    };
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
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
            setShowModal(true);
            setErrorMsg("You need to log in to like a detail page");
        } else {
            const response = await service.userLikesDetail(currentUser._id, id);
            setLiked(true);
            console.log("userLikesDetail response: ", response);
        }
    }
    const RevertLikeDetail = async () => {
        if (! loggedIn) {
            setShowModal(true);
            setErrorMsg("You need to log in to revert a like on a detail page");
        } else {
            const response = await service.userRevertLikesDetail(currentUser._id, id);
            setLiked(false);
            console.log("userRevertLikesDetail response: ", response);
        }
    }

    const dislikeDetail = async () => {
        if (! loggedIn) {
            setShowModal(true);
            setErrorMsg("You need to log in to dislike a detail page");
        } else {
            const response = await dislikeService.userDislikesDetail(currentUser._id, id);
            setDisliked(true)
            console.log("userDislikesDetail response: ", response);
        }
    }

    const revertDislikeDetail = async () => {
        if (! loggedIn) {
            setShowModal(true);
            setErrorMsg("You need to log in to revert a dislike on a detail page");
        } else {
            const response = await dislikeService.userRevertDislikesDetail(currentUser._id, id);
            setDisliked(false)
            console.log("userRevertDislikesDetail response: ", response);
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
            <button className='btn border'
                    onClick={() => navigate(-1)}>
                <i className="fas fa-arrow-left me-2"></i>Back
            </button>
            {/*<h1 className="display-3">Dogs detail page</h1>*/}

            <p className="display-4">{detail.name}</p>
            <div>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
            </div>
            <div>
                {/*<h1 className="display-5">{loggedIn? `Hi ${currentUser.firstName} Like it or not?` : "Ops! You need to log in to like or dislike!"} </h1>*/}
                {liked? <button className="btn btn-success mt-2 me-2" onClick={RevertLikeDetail}><i className="bi bi-heart-fill"/></button>: <button className="btn btn-success mt-2 me-2" onClick={likeDetail}><i className="bi bi-heart"/></button>}

                {disliked? <button className="btn btn-danger mt-2 ms-2" onClick={revertDislikeDetail}><i className="bi bi-heartbreak-fill"/></button>: <button className="btn btn-danger mt-2 ms-2" onClick={dislikeDetail}><i className="bi bi-heartbreak"/></button>}
                <Modal show={showModal} message={errorMsg} onClose={closeModal} />
            </div>
        </div>
    )
}

export default DogsDetailScreen;