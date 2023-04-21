import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import EventItem from "./events-item";
import {getUserById} from "../../services/users-service";
import {useParams} from "react-router-dom";

const EventList =() => {
  const {currentUser} = useSelector(state => state.users);
  const [user, setUser] = useState({});
  const { id } = useParams();
  const fetchUser = async () => {
    if (id != null) {
      const fetchedUser = await getUserById(id);
      setUser(fetchedUser);
    } else {
      setUser(currentUser);
    }
  };
  const {events, loading} = useSelector(state => state.events);
  const userEvents = events.filter(currentUser => currentUser.userId === user._id);

  useEffect(() => {
    fetchUser();
  }, [currentUser, id]);

  return(
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          userEvents.map(event => (
              <div className="list-group-item" key={event._id}>
                <EventItem key ={event._id} post={event}/>
              </div>
          ))}
      </ul>
  );
};
export default EventList
