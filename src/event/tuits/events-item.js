import React from "react"
import {useDispatch} from "react-redux";
import {deleteEventThunk} from "../../services/event-thunks.js";

const EventItem = ({post = {}}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteEventThunk(id));
  }
  return(
      <>
        <div className="float-end ms-5">
          <i className="bi bi-x-lg"
             onClick={() => deleteTuitHandler(post._id)}></i>
        </div>
        <div className="d-flex">
          <img className="rounded-circle d-flex" alt ="" src={`../img/${post.image}`} width="50px" height="50px"/>
          <div className="float-end">
            <div className="ms-5">
              <span className="fw-bold me-2">{post.username}</span>
            </div>
            <div className="ms-5 mt-2 mb-2">{post.tuit}</div>
          </div>
        </div>
      </>
  );
};
export default EventItem