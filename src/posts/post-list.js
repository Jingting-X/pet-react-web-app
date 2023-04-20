import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./post-item";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/users-service";

const PostList = () => {
    const { posts, loading } = useSelector((state) => state.posts);
    const { currentUser } = useSelector((state) => state.users);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const { id } = useParams();
    const fetchUser = async () => {
        if (id != null) {
            const fetchedUser = await getUserById(id);
            console.log(id);
            console.log(user);
            setUser(fetchedUser);
        } else {
            setUser(currentUser);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [currentUser, id]);

    const filteredPosts = posts.filter((post) => post.userId === user._id);

  return (
      <ul className="list-group bg-transparent">
        {
            loading &&
            <li className="list-group-item bg-transparent">
              Loading...
            </li>
        }
        {
            filteredPosts.map(post =>
              <PostItem key={post._id} post={post}/>
          )
        }
      </ul>
  );
};
export default PostList;