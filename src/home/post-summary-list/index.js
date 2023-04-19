import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findPosts} from "../../services/post-service";
import {findPostsThunk} from "../../services/post-thunk";
import {getUserByIdThunk, getUsersThunk} from "../../services/users-thunks";


const PostSummaryList = () => {
    const { posts, loading } = useSelector((state) => state.posts);
    const { currentUser, users } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunk());
        dispatch(findPostsThunk());
    }, []);
    //
    // console.log(users);
    // console.log(posts);

    return (
        <div className="list-group mt-3">
            {loading ? (
                <div>Loading...</div>
            ) : (
                posts.map((post) => {
                    // const postUser = users && users.filter(user => user._id === post.userId);
                    return (
                        <PostSummaryItem
                            key={post._id}
                            post={post}
                            userId={post.userId}
                        />
                    );
                })
            )}
        </div>
    );
};

export default PostSummaryList;
