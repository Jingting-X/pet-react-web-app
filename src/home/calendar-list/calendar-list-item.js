import React, { useState } from "react";

const EventSummaryItem = ({ post }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-12">
            <div
                className="fw-bold"
                style={{ color: "palevioletred", fontSize: 20 }}
            >
              {post.title}
            </div>
            <div className="fw-bold small">{post.time}</div>
            <div
                className="text-muted"
                style={{ maxHeight: showDetails ? "none" : "3em", overflow: "hidden" }}
            >
              {post.event}
            </div>
            <button
                className="btn btn-link float-end"
                onClick={toggleDetails}
                style={{ display: showDetails || post.event.length <= 150}}
            >
              {showDetails ? "show less" : "more details"}
            </button>
          </div>
        </div>
      </li>
  );
};
export default EventSummaryItem;

