import React from "react";

const WhoToFollowListItem = (
    {
      who = {
        userName: 'Friend1',
        handle: 'friend1',
        avatarIcon: 'do1.png' }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" alt=""
                 style={{width: 48, height: 48, objectFit: "cover"}}
                 src={`/imgs/${who.avatarIcon}`}/>
          </div>
          <div className="col-8">
            <div className="fw-bold">{who.userName}</div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow</button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;