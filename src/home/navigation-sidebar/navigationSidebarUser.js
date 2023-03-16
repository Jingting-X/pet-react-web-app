import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const NavigationSidebarGuest = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/');
  const active = paths[2];
  return(
      <div className="list-group rounded-3">
        <Link to="/home" className="list-group-item">
          <i className="fa fa-home me-2"></i>
          <span className="ms-1 d-none d-xl-inline">Home</span>
        </Link>

        <Link to="/home/about" className={`list-group-item ${active === 'about' ? 'active' : ''}`}>
          <i className="fas fa-hashtag fa-lg me-2"></i>
          <span className="ms-1 d-none d-xl-inline">About</span>
        </Link>

        <Link to="/home/event" className={`list-group-item ${active === 'event' ? 'active' : ''}`}>
          <i className="fa-solid fa-calendar-days fa-lg me-2"></i>
          <span className="ms-1 d-none d-xl-inline">Event</span>
        </Link>

        <Link to="/home/post" className={`list-group-item ${active === 'post' ? 'active' : ''}`}>
          <i className="fa-solid fa-book fa-lg me-2"></i>
          <span className="ms-1 d-none d-xl-inline">Post</span>
        </Link>

        <Link to="/home/setting" className={`list-group-item ${active === 'setting' ? 'active' : ''}`}>
          <i className="fa-solid fa-bars fa-lg me-2"></i>
          <span className="ms-1 d-none d-xl-inline">Setting</span>
        </Link>

        <Link to="/home/notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
          <i className="fa-regular fa-bell fa-lg me-2"></i>
          <span className="ms-1 d-none d-xl-inline">Notifications</span>
        </Link>
      </div>
  )
};
export default NavigationSidebarGuest;