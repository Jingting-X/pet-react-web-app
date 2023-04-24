import CommentForm from "../../posts/comment-form";
import {addCommentThunk, getCommentsThunk, updatePostThunk} from "../../services/post-thunk";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";


const HomePostStats = ({post = {}}) => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.users);
    const [comments, setComments] = useState(post.comments || []);
    const [showComments, setShowComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);


    const handleSubmit = async (comment) => {
        if (!currentUser) {
            alert('Please sign in to add a comment.');
            return;
        }
        await dispatch(addCommentThunk(post._id, comment));
        setComments([...comments, comment]);
    };
    const handleLike = () => {
        if (!currentUser) {
            alert('Please sign in to like this post.');
            return;
        }
        dispatch(updatePostThunk({
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
        }));
    };
    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div className="d-flex align-items-center">
            <div className="col-12">
                <div>
                    {showComments ? (
                        <>
                            <i className="fa-regular fa-comment fa-lg me-2 text-secondary"
                               onClick={() => setShowComments(false)}></i>
                            <div className="mt-2">
                                {comments.map((comment) => (
                                    <div key={comment._id} className="mb-2">
                                        <p className="fw-bold mb-0">{comment.userName}</p>
                                        <p className="text-muted mb-0">{formatDate(comment.time)}</p>
                                        <p className="mb-0">{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                            {showCommentForm && <CommentForm postId={post._id} handleSubmit={handleSubmit}/>}
                            {!showCommentForm && (
                                <button className="btn btn-sm btn-outline-secondary mt-2"
                                        onClick={() => {
                                            if (!currentUser) {
                                                alert('Please sign in to add a comment.');
                                                return;
                                            }
                                            setShowCommentForm(true)
                                        }}>
                                    Add Comment
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <i className="fa-regular fa-comment fa-lg me-2 text-secondary"
                               onClick={() => setShowComments(true)}></i>
                            {comments.length > 0 ? <span className="text-secondary">{comments.length}</span> :
                                <span className="text-secondary">0</span>}
                        </>
                    )}

                </div>
            </div>

            <div className="col-4 text-secondary">
                <div className="d-flex align-items-center">
                    {post.liked ? (
                        <i
                            className="fa-regular fa-heart fa-lg me-2 text-danger"
                            onClick={handleLike}
                        ></i>
                    ) : (
                        <i
                            className="fa-regular fa-heart fa-lg me-2 text-secondary"
                            onClick={handleLike}
                        ></i>
                    )}
                    <span>{post.likes}</span>
                </div>
            </div>
        </div>
    );
}
export default HomePostStats;
