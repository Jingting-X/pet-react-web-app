import React, {useEffect} from "react";
import EventSummaryItem from "./calendar-list-item.js";
import {useSelector, useDispatch} from "react-redux";
import {findEventsThunk} from "../../services/event-thunks";

const Calendar = () => {
  const {events} = useSelector(state => state.events)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findEventsThunk())
  }, [dispatch])
  return(
      <ul className="list-group">
        <li className="list-group-item pt-3 pb-0">
          <h4>Coming Event..</h4>
        </li>
        {
          events.map(details =>
              <EventSummaryItem key={details._id} post={details}/>)
        }
      </ul>
  );
};
export default Calendar;