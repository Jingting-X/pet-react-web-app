import React from "react";
import {useDispatch} from "react-redux";

const DogStats = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "disliked": true,
            "replies": 345,
            "retuits": 321,
            "likes": 1234,
            "dislikes": 3,
            "handle": "@SpaceX",
            "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed"
        }
    }
) => {
    const dispatch = useDispatch();
    const toggleLiked = (inre) => {
        dispatch(updateTuitThunk({...tuit, likes: tuit.likes + inre, liked: !tuit.liked}))
    }
    const toggleDisliked = (inre) => {
        dispatch(updateTuitThunk({...tuit, dislikes: tuit.dislikes + inre, disliked: !tuit.disliked}))
    }
    return (
        <div className="row justify-content-evenly mt-2">
            <div className="col">
                <i className="bi bi-chat"> <span>{tuit.replies}</span></i>
            </div>
            <div className="col">
                <i className="bi bi-app-indicator"> <span>{tuit.retuits}</span></i>
            </div>
            <div className="col">
                {tuit.liked ?
                    <i className="bi bi-heart-fill" onClick={() => toggleLiked(-1)}> <span>{tuit.likes}</span></i> :
                    <i className="bi bi-heart" onClick={() => toggleLiked(1)}> <span>{tuit.likes}</span></i>}
            </div>
            <div className="col">
                {tuit.disliked ?
                    <i className="bi bi-hand-thumbs-down-fill" onClick={() => toggleDisliked(-1)}>
                        <span>{tuit.dislikes}</span></i> :
                    <i className="bi bi-hand-thumbs-down" onClick={() => toggleDisliked(1)}>
                        <span>{tuit.dislikes}</span></i>}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default DogStats;