import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findPostsThunk} from "../../services/post-thunk";
import {getUsersThunk} from "../../services/users-thunks";


const PostSummaryList = () => {
    const { posts, loading } = useSelector((state) => state.posts);
    const { currentUser, users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunk());
        dispatch(findPostsThunk());
    }, []);

    return (
        <div className="list-group mt-3">
            {loading ? (
                <div>Loading...</div>
            ) : (
                posts.length > 0 ? (
                    posts.map((post) => (
                        <PostSummaryItem
                            key={post._id}
                            post={post}
                            userId={post.userId}
                        />
                    ))
                ) : (
                    <div>No posts found.</div>
                )
            )}
        </div>
    );
};

export default PostSummaryList;
