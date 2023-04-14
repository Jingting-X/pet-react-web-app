import React from "react";

const EventSummaryItem = ({post}) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-12">
            <div className="fw-bold">{post.username}</div>
            <div>{post.tuit}</div>
          </div>
          {/*<div className="col-2">*/}
          {/*  <button className="btn btn-primary rounded-pill float-end">Click</button>*/}
          {/*</div>*/}
        </div>
      </li>
  );
};
export default EventSummaryItem;