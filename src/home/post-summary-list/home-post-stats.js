import CommentForm from "../../posts/comment-form";
import {addCommentThunk, getCommentsThunk, updatePostThunk} from "../../services/post-thunk";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";


const HomePostStats = ({ post = {} }) => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [showCommentForm, setShowCommentForm] = useState(false);

    useEffect(() => {
        dispatch(getCommentsThunk({ pid: post._id })).then((data) => {
            setComments(data.payload);
        });
    }, [dispatch, post._id]);

    const handleSubmit = (comment) => {
        dispatch(addCommentThunk(post._id, comment));
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div className="row ">
            <div className="col-6">
                <div className="d-flex align-items-center">
                    {showComments ? (
                        <>
                            <i className="fa-regular fa-comment fa-lg me-2 text-secondary" onClick={() => setShowComments(false)}></i>
                            <div className="mt-2">
                                {comments.map((comment) => (
                                    <div key={comment._id} className="mb-2">
                                        <p className="fw-bold mb-0">{comment.userName}</p>
                                        <p className="text-muted mb-0">{formatDate(comment.time)}</p>
                                        <p className="mb-0">{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                            <button
                                className="btn btn-sm btn-outline-secondary mt-2"
                                onClick={() => setShowCommentForm(!showCommentForm)}
                            >
                                Add Comment
                            </button>
                            {showCommentForm && <CommentForm postId={post._id} handleSubmit={handleSubmit} />}
                        </>
                    ) : (
                        <>
                            <i className="fa-regular fa-comment fa-lg me-2 text-secondary" onClick={() => setShowComments(true)}></i>
                            {comments.length > 0 && <span className="text-secondary">{comments.length}</span>}
                        </>
                    )}
                </div>
            </div>

            <div className="col-6 text-secondary">
                <div className="d-flex align-items-center">
                    {post.liked ? (
                        <i
                            className="fa-regular fa-heart fa-lg me-2 text-danger"
                            onClick={() =>
                                dispatch(
                                    updatePostThunk({
                                        ...post,
                                        liked: !post.liked,
                                        likes: post.likes - 1,
                                    })
                                )
                            }
                        ></i>
                    ) : (
                        <i
                            className="fa-regular fa-heart fa-lg me-2 text-secondary"
                            onClick={() =>
                                dispatch(
                                    updatePostThunk({
                                        ...post,
                                        liked: !post.liked,
                                        likes: post.likes + 1,
                                    })
                                )
                            }
                        ></i>
                    )}
                    <span>{post.likes}</span>
                </div>
            </div>
        </div>
    );
};

export default HomePostStats;
