import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {createPostThunk} from "../../../services/post-thunk";

const CreatePostComponent = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const postClickHandler = () => {
        const newPost = {
            post: whatsHappening
        }
        dispatch(createPostThunk(newPost));
    }
    return (
        <div className="row">
            <div className="col-12">
        <textarea value={whatsHappening} placeholder="What's on your mind?"
                  className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
        </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={postClickHandler}>
                        Post
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default CreatePostComponent;