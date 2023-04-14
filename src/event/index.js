import React from "react";
import EventList from "./tuits/events-list";
import EventPost from "./whats-happening";

const EventCompoment = () => {
  return (
      <div className="mt-5">
        <EventPost/>
        <EventList/>
      </div>
  );
};
export default EventCompoment;