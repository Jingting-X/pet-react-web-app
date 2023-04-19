import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk, getCommentsThunk, updatePostThunk } from "../services/post-thunk";
import CommentForm from "./comment-form";

const PostStats = ({ post = {} }) => {
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
        <div className="row pt-2">
            <div className="col-4">
                {showComments ? (
                    <>
                        <i className="bi bi-chat text-secondary" onClick={() => setShowComments(false)}></i>
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
                    <i className="bi bi-chat text-secondary" onClick={() => setShowComments(true)}></i>
                )}
                {comments.length > 0 && <span className="text-secondary ps-2">{comments.length}</span>}

            </div>

            {/*<div className="col-2 d-flex">*/}
            {/*    <i className="bi bi-arrow-repeat text-secondary"></i>*/}
            {/*    <span className="text-secondary ps-2">{post.reposts}</span>*/}
            {/*</div>*/}
            <div className="col-4 text-secondary">
                {post.liked ? (
                    <i
                        className="bi bi-heart-fill text-danger"
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
                        className="bi bi-heart"
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
                <span className="ps-2">{post.likes}</span>
            </div>
            <div className="col-4">
                <i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
};

export default PostStats;