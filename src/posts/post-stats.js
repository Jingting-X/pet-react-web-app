import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addCommentThunk, getCommentsThunk, updatePostThunk } from "../services/post-thunk";
import CommentForm from "./comment-form";

const PostStats = ({ post = {} }) => {
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
                            onClick={() => {
                                if (!currentUser) {
                                    alert('Please sign in to add a comment.');
                                    return;
                                }
                                setShowCommentForm(!showCommentForm);
                            }}
                        >
                            Add Comment
                        </button>
                        {showCommentForm && <CommentForm postId={post._id} handleSubmit={handleSubmit} />}
                    </>
                ) : (
                    <i className="bi bi-chat text-secondary" onClick={() => setShowComments(true)}></i>
                )}
                {post.comments && comments.length > 0 && <span className="text-secondary ps-2">{comments.length}</span>}

            </div>

            <div className="col-4 text-secondary">
                {post.liked ? (
                    <i
                        className="bi bi-heart-fill text-danger"
                        onClick={handleLike}
                    ></i>
                ) : (
                    <i
                        className="bi bi-heart"
                        onClick={handleLike}
                    ></i>
                )}
                <span className="ps-2">{post.likes}</span>
            </div>

            {/*<div className="col-4">*/}
            {/*    <i className="bi bi-share text-secondary"></i>*/}
            {/*</div>*/}
        </div>
    );
};

export default PostStats;