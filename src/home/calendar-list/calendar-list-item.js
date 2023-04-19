import React from "react";

const EventSummaryItem = ({post}) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-12">
            <div className="fw-bold">{post.time}</div>
            <div className="text-muted">{post.event}</div>
          </div>
        </div>
      </li>
  );
};
export default EventSummaryItem;