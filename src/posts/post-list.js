import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostItem from "./post-item";
import { findPostsThunkByUser} from "../services/post-thunk";

const PostList = () => {
  const {posts, loading} = useSelector(state => state.posts)
  const {currentUser} = useSelector(state => state.users)
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser && currentUser._id) {
      dispatch(findPostsThunkByUser(currentUser._id));
    }
  }, [currentUser]);

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