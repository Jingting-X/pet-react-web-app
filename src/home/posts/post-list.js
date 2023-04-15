import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./post-item";
import {findPostsThunk} from "../../services/post-thunk";

const PostList = () => {
    const {posts, loading} = useSelector(state => state.postsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                posts.map(post =>
                    <PostItem key={post._id} post={post}/>
                )
            }
        </ul>
    );
};
export default PostList;