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

    return (
        <div className="list-group-item bg-light border-top-0 border-end-0 border-start-0">
            <div
                className="row align-items-center"
                style={{overflowX: "auto"}}
            >
                <h1
                    className="mt-1"
                    style={{fontWeight: "bold", fontSize: "20px"}}
                >
                    {post.post}
                </h1>
                <div
                    className="d-flex float-end position-relative"
                    style={{width: "100%"}}
                >
                    <img
                        src={post.img}
                        className="position-relative mb-3"
                        style={{width: "35%"}}
                    />
                    <div
                        className="p-3"
                        style={{wordWrap: "break-word", wordBreak: "break-all"}}
                    >
                        <div>
                            <div>
                                <a
                                    href={`/profile/${user._id}`}
                                    onClick={(event) => handleUserClick(event, user._id)}
                                >
                                    {user.firstName} {user.lastName}
                                </a>
                            </div>
                            <div>{post.post}</div>
                            <div className="d-flex align-items-center mt-5">
                                <HomePostStats key={post._id} post={post} />
                            </div>
                            {/*<span className="d-flex mt-5 ps-4">*/}
                            {/*        <HomePostStats key={post._id} post={post}/>*/}
                            {/*    /!*<i className="fa-regular fa-comment fa-lg me-5"></i>*!/*/}
                            {/*    /!*<i className="fa-regular fa-heart fa-lg me-5"></i>*!/*/}
                            {/* </span>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostSummaryItem;
