import React, {useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createPostThunk} from "../../services/post-thunk";
import "../index.css";
import "./index.css";

const CreatePostComponent = () => {
    const [whatsHappening, setWhatsHappening] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const fileInput = useRef(null);

    const postClickHandler = () => {
        if (!currentUser) {
            alert('Please sign in to create a post.');
            return;
        }

        const newPost = {
            post: whatsHappening,
            userId: currentUser._id,
            userName: currentUser.userName,
            image: imagePreview,
            time: new Date().toISOString(),
        }
        console.log(newPost);
        dispatch(createPostThunk(newPost));
        setWhatsHappening('');
        setImagePreview('');
    };

    const handleFileUpload = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="row">
            <div className="col-12">
        <textarea
            value={whatsHappening}
            placeholder="What's on your mind?"
            className="form-control border-0 wd-border"
            onChange={(event) => setWhatsHappening(event.target.value)}
        />
                <div>
                    <button
                        className="text-dark rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold post-button"
                        onClick={postClickHandler}
                    >
                        Post
                    </button>
                    <div className="text-primary fs-2">
                        <label htmlFor="image-input">
                            <i className="bi bi-card-image me-3 post-icon" />
                        </label>
                        <input
                            type="file"
                            id="image-input"
                            style={{ display: "none" }}
                            ref={fileInput}
                            onChange={handleFileUpload}
                        />
                    </div>
                    {imagePreview && (
                        <div className="text-center mt-2">
                            <img
                                src={imagePreview}
                                alt="preview"
                                style={{ maxWidth: "100%", maxHeight: "300px" }}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
    );
};

export default CreatePostComponent;
