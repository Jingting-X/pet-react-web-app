import React from 'react';
import {Routes, Route} from "react-router";
import NavigationSidebarGuest from "./navigation-sidebar/index.js";
import NavigationSidebarUser from "./navigation-sidebar/navigationSidebarUser.js";
import NavigationSidebarAdmin from "./navigation-sidebar/navigationSidebarAdmin.js";
import HomeComponent from "./home/HomeComponent.js";
import Calendar from "./calendar-list/calendar-list-item";
import WhoToFollowList from "./who-to-follow-list/index.js";
import WelcomeAdmin from "./welcome-admin";
import Footnote from "./Footnote";


function Home() {
  return (
        <div className="container mb-4">
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
              {/*<NavigationSidebarGuest/>*/}
              {/*<NavigationSidebarUser/>*/}
              <NavigationSidebarAdmin/>
            </div>
            <div className="col-10 col-md-7 col-lg-7 col-xl-7" style={{"position": "relative"}}>
              <Routes>
                <Route path="/" element={<HomeComponent/>}/>
              </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">
              {/*<Calendar/>*/}
              <WelcomeAdmin/>
              {/*<WhoToFollowList/>*/}
            </div>
          </div>
        </div>
  );
}
export default Home