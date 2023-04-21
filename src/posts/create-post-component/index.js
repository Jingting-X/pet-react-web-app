
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../services/post-thunk";
import "../index.css";
import "./index.css";

const CreatePostComponent = () => {
    const [whatsHappening, setWhatsHappening] = useState('');
    const [location, setLocation] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { currentUser } = useSelector(state => state.users);
    const dispatch = useDispatch();

    const postClickHandler = () => {
        if (!currentUser) {
            alert('Please sign in to create a post.');
            return;
        }

        const newPost = {
            post: whatsHappening,
            userId: currentUser._id,
            // location: location
        }
        dispatch(createPostThunk(newPost));
    }

    return (

        <div className="row">
            <div className="col-12">
        <textarea value={whatsHappening} placeholder="What's on your mind?" className="form-control border-0 wd-border"
                  onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold post-button"
                            onClick={postClickHandler}>
                        Post
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3 post-icon"></i>
                        <i className="bi bi-geo-alt post-icon"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
}

export default CreatePostComponent;
