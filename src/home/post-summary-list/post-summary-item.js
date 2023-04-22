import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserByIdThunk} from "../../services/users-thunks";
import {useNavigate} from "react-router-dom";
import {getUserById} from "../../services/users-service";
import PostStats from "../../posts/post-stats";
import HomePostStats from "./home-post-stats";

const PostSummaryItem = ({post = {}, userId = {}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!post || Object.keys(post).length === 0 || !userId) {
            return;
        }
        setIsLoading(true);
        dispatch(getUserByIdThunk(userId)).then((user) => {
            setUser(user.payload);
            setIsLoading(false);
        });
    }, [dispatch, post, userId]);


    const handleUserClick = (event, userId) => {
        event.preventDefault();
        navigate(`/profile/${userId}`);
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const formatDate = (date) => {
        const options = {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <div className="list-group-item bg-light border-top-0 border-end-0 border-start-0">
            <div
                className="row align-items-center"
                style={{overflowX: "auto"}}
            >
                <div
                    className="d-flex float-end position-relative"
                    style={{width: "100%"}}
                >
                    {post.image && <img
                        src={post.image}
                        className="position-relative mb-3"
                        style={{width: "35%"}}
                    />}

                    <div
                        className="p-3"
                        style={{wordWrap: "break-word", wordBreak: "break-all"}}
                    >
                        <div>
                            <div className="row">
                                <div className="col-2">
                                    {user.avatar ? (
                                        <img
                                            className="rounded-pill"
                                            width="48px"
                                            height="48px"
                                            onClick={(event) => handleUserClick(event, user._id)}
                                            alt=""
                                            src={`${user.avatar}`}
                                        />
                                    ) : (
                                        <img className="rounded-pill"
                                             width="48px"
                                             height="48px"
                                             src="/img/default-avatar.png"
                                             onClick={(event) => handleUserClick(event, user._id)}
                                             alt=""/>
                                    )}
                                </div>
                                <div className="col-10 ps-3">
                                    <div className="row">
                                        <div className="col-12 d-flex">
                                            <div className="fw-bold pe-1">{user.userName}</div>
                                            <i
                                                className="bi bi-check-circle-fill table-primary pe-1"
                                                style={{color: "#0096FF"}}
                                            />
                                            <div className="text-secondary">
                                                {formatDate(post.time)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-2">{post.post}</div>
                                    <div className="d-flex align-items-center mt-5">
                                        <HomePostStats key={post._id} post={post}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostSummaryItem;
