import React from "react";
import {useSelector} from "react-redux";
// import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item.js";

const WhoToFollowList = () => {
  const whoArray = useSelector(
      (state) => state.who);
  return(
      <ul className="list-group">
        <li className="list-group-item pt-3 pb-0">
          <h4>Who to follow</h4>
        </li>
        {
          whoArray.map(who =>
              <WhoToFollowListItem key={who._id} who={who}/>
          )
        }
      </ul>
  );
};
export default WhoToFollowList;