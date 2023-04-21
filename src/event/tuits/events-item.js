import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {deleteEventThunk} from "../../services/event-thunks.js";

const EventItem = ({post = {}}) => {
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteEventHandler = (id) => {
    dispatch(deleteEventThunk(id));
  }
  return(
      <>
        <div className="float-end ms-5">
          <i className="bi bi-x-lg"
             onClick={() => deleteEventHandler(post._id)}></i>
        </div>
        <div className="d-flex">
          <img className="rounded-circle d-flex" alt ="" src={`../img/${post.image}`} width="50px" height="50px"/>
          <div className="float-end">
            <div className="ms-5">
              <span className="fw-bold me-2">{post.title}</span>
              <span className="text-muted small me-2">@  {currentUser.firstName}</span>
            </div>
            <div className="ms-4">
              <span className="text-muted small ms-4">{post.time}</span>
            </div>
            <div className="ms-5 mt-2 mb-2">{post.event}</div>
          </div>
        </div>
      </>
  );
};
export default EventItem
