import React from "react";
import EventList from "./tuits/events-list";
import EventPost from "./whats-happening";
import {useNavigate} from "react-router";

const EventCompoment = () => {
  const navigate = useNavigate();
  return (
      <div className="container">
        <div className="col-4 d-flex justify-content-start">
          <button className="btn btn-light border" onClick={() => navigate('/home')}> <i className="fas fa-arrow-left me-2"></i>Back Home</button>
        </div>
        <div className="mt-5">
          <EventPost/>
          <EventList/>
        </div>
      </div>
  );
};
export default EventCompoment;