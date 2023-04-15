import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deletePostThunk} from "../../services/post-thunk";
import PostStats from "./post-stats";

const PostItem = ({
                      post =
                          {}
                  }
) => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.users);
    const deletePostHandler = (id) => {
        dispatch(deletePostThunk(id));
    }
    if (!post || Object.keys(post).length === 0) {
        return <div>Loading...</div>; // or any other indicator that the data is being fetched
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-pill" width="48px" height="48px" alt=""
                         src={`/img/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{currentUser.firstName}</div>
                            <i className="bi bi-check-circle-fill table-primary pe-1"
                               style={{color: "#0096FF"}}></i>
                            <div className="text-secondary"> {currentUser.handle} · {post.time}</div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-x-lg float-end" onClick={() => deletePostHandler(post._id)}></i>
                        </div>
                    </div>
                    <div className="mb-2 text-secondary">
                        {post.post}
                    </div>
                    <PostStats key={post._id} post={post}/>
                </div>
            </div>
        </li>

    );
}
export default PostItem;