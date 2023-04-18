import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addCommentThunk } from "../services/post-thunk";

const CommentForm = ({ postId, handleSubmit }) => {
    const [text, setText] = useState("");
    const {currentUser} = useSelector(state => state.users);
    const userName = currentUser.firstName;
    const userId = currentUser._id;
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("--------form----");
        console.log(postId);
        const comment = {
            text,
            userId, // replace with the actual user id
            userName,
            time: new Date().toISOString() // set the current time as ISO string
        };
        await dispatch(addCommentThunk({ postId, comment })); // pass an object with postId and comment
        setText("");
        handleSubmit();
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="text"
                    rows="3"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default CommentForm;
