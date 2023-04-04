import React from "react";
import {useDispatch} from "react-redux";
import {updatePostThunk} from "../../services/post-thunk";

const PostStats = ({
                       post =
                           {}
                   }
) => {
    const dispatch = useDispatch();

    return (
        <div className="row pt-2">
            <div className="col-2">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary ps-2">{post.comments}</span></div>
            <div className="col-2 d-flex">
                <i className="bi bi-arrow-repeat text-secondary"></i>
                <span className="text-secondary ps-2">{post.reposts}</span></div>
            <div className="col-3 text-secondary">
                {post.liked ? <i className="bi bi-heart-fill text-danger" onClick={() => dispatch(updatePostThunk({
                        ...post,
                        liked: !post.liked,
                        likes: post.likes - 1,
                    }))}
                    ></i>
                    : <i className="bi bi-heart" onClick={() => dispatch(updatePostThunk({
                        ...post,
                        liked: !post.liked,
                        likes: post.likes + 1,
                    }))}
                    ></i>
                }
                <span className="ps-2">{post.likes}</span>
            </div>
            <div className="col-2"><i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
}
export default PostStats;