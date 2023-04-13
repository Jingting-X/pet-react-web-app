import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import EventItem from "./events-item";
import {findEventsThunk} from "../../services/event-thunks.js";

const EventList =() =>{
  const {events, loading} = useSelector(
      state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findEventsThunk())
  }, [dispatch])
  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }

        {
          events.map(details => (
              <div className="list-group-item ">
                <EventItem key ={details._id} post={details}/>
              </div>
          ))}
      </ul>
  );
};
export default EventList