import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebarGuest = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group rounded-3">
            <Link to="/home" className="list-group-item">
                <i className="fa fa-home me-2"></i>
                <span className="ms-1 d-none d-xl-inline">Home</span>
            </Link>

            <Link to="/about" className={`list-group-item ${active === 'about' ? 'active' : ''}`}>
                <i className="fas fa-hashtag fa-lg me-2"></i>
                <span className="ms-1 d-none d-xl-inline">About</span>
            </Link>

            <Link to="/event" className={`list-group-item ${active === 'event' ? 'active' : ''}`}>
                <i className="fa-solid fa-calendar-days fa-lg me-2"></i>
                <span className="ms-1 d-none d-xl-inline">Event</span>
            </Link>

            <Link to="/post" className={`list-group-item ${active === 'post' ? 'active' : ''}`}>
                <i className="fa-solid fa-book fa-lg me-2"></i>
                <span className="ms-1 d-none d-xl-inline">Post</span>
            </Link>

            <Link to="/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                <i className="fa-solid fa-bars fa-lg me-2"></i>
                <span className="ms-1 d-none d-xl-inline">Profile</span>
            </Link>

            <Link to="/notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fa-regular fa-bell fa-lg me-2"></i>
                <span className="ms-1 d-none d-xl-inline">Notifications</span>
            </Link>

            <Link to="/admin" className={`list-group-item ${active === 'admincenter' ? 'active' : ''}`}>
                <i className="fa-solid fa-user-shield fs-6 me-1"></i>
                <span className="ms-1 d-none d-xl-inline">Admin Center</span>
            </Link>
        </div>
    )
};
export default NavigationSidebarGuest;