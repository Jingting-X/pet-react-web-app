import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const DogStats = (
    {
        detail = {
            "topic": "TestDog",
            "userName": "Lili",
            "image": "https://cdn2.thedogapi.com/images/8NAninQ0P.jpg",
            "liked": true,
            "disliked": false,
            "replies": 345,
            "forward": 321,
            "likes": 1234,
            "dislikes": 3,
            "handle": "@lili",
        }
    }
) => {
    const detailArray = useSelector((state => state.detail));
    const dispatch = useDispatch();
    const toggleLiked = (inre) => {
        // dispatch(updateDetailThunk({...detail, likes: detail.likes + inre, liked: !detail.liked}))
    }
    const toggleDisliked = (inre) => {
        // dispatch(updateDetailThunk({...detail, dislikes: detail.dislikes + inre, disliked: !detail.disliked}))
    }
    return (
        <div className="row justify-content-evenly mt-2">
            <div className="col">
                <i className="bi bi-chat"> <span>{detail.replies}</span></i>
            </div>
            <div className="col">
                <i className="bi bi-app-indicator"> <span>{detail.redogs}</span></i>
            </div>
            <div className="col">
                {detail.liked ?
                    <i className="bi bi-heart-fill" onClick={() => toggleLiked(-1)}> <span>{detail.likes}</span></i> :
                    <i className="bi bi-heart" onClick={() => toggleLiked(1)}> <span>{detail.likes}</span></i>}
            </div>
            <div className="col">
                {detail.disliked ?
                    <i className="bi bi-hand-thumbs-down-fill" onClick={() => toggleDisliked(-1)}>
                        <span>{detail.dislikes}</span></i> :
                    <i className="bi bi-hand-thumbs-down" onClick={() => toggleDisliked(1)}>
                        <span>{detail.dislikes}</span></i>}
            </div>
            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};
export default DogStats;