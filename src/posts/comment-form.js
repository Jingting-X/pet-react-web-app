import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addCommentThunk } from "../services/post-thunk";

const CommentForm = ({ postId, handleSubmit }) => {
    const [text, setText] = useState("");
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        if (!currentUser) {
            alert('Please sign in to add a comment.');
            e.preventDefault();
            return;
        }

        const comment = {
            userId: currentUser._id,
            userName: currentUser.firstName,
            time: new Date().toISOString()
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
