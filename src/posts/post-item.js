import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePostThunk} from "../services/post-thunk";
import PostStats from "./post-stats";
import {getUserById} from "../services/users-service";

const PostItem = ({post = {}}) => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await getUserById(post.userId);
            setUser(fetchedUser);
        };
        fetchUser();
    }, [post.userId]);

    if (!post || Object.keys(post).length === 0) {
        return <div>Loading...</div>;
    }

    const deletePostHandler = (id) => {
        dispatch(deletePostThunk(id));
    };

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
    };

    return (
        <li className="list-group-item border-0 bg-transparent">
            <div className="row">
                <div className="col-1">
                    {user.avatar ? (
                        <img
                            className="rounded-pill"
                            width="48px"
                            height="48px"
                            alt=""
                            src={`${user.avatar}`}
                        />
                    ) : (
                        <img className="rounded-pill"
                             width="48px"
                             height="48px"
                             src="/img/default-avatar.png"
                             alt=""/>
                    )}
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{user.userName}</div>
                            <i
                                className="bi bi-check-circle-fill table-primary pe-1"
                                style={{color: "#0096FF"}}
                            />
                            <div className="text-secondary">
                                {formatDate(post.time)}
                            </div>
                        </div>
                        <div className="col-2">
                            {currentUser && (post.userId === currentUser._id) && (
                                <i
                                    className="bi bi-x-lg float-end"
                                    onClick={() => deletePostHandler(post._id)}
                                />
                            )}
                        </div>
                    </div>
                    <div className="mb-2 text-secondary">{post.post}</div>
                    <div>
                        <img src = {post.image}  className="rounded border border-secondary"/>
                    </div>
                    {/*{post.location && (*/}
                    {/*    <div className="mb-2 text-secondary">*/}
                    {/*        <i className="bi bi-geo-alt me-1"></i>*/}
                    {/*        {post.location}*/}
                    {/*    </div>*/}
                    {/*)}*/}
                    <PostStats key={post._id} post={post}/>
                </div>
            </div>
        </li>
    );
};
export default PostItem;