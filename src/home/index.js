import React, { useState } from 'react';
import {Routes, Route} from "react-router";
import HomeComponent from "./home/HomeComponent.js";
import Calendar from "./calendar-list/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import Welcome from "./welcome";
import { useSelector } from 'react-redux';
import NavigationSidebar from './navigation-sidebar/index.js';

function Home() {
const { currentUser } = useSelector((state) => state.users);
  return (
        <div className="container mb-4">
          <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
              <NavigationSidebar/>
              </div>
            <div className="col-10 col-md-7 col-lg-7 col-xl-7" style={{"position": "relative"}}>
              <Routes>
                <Route path="/" element={<HomeComponent/>}/>
              </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3">             
              <Welcome/>
              <Calendar/> 
              {/*<WhoToFollowList/>*/}
            </div>
            {/* <div>
                {currentUser.role}
            </div> */}
          </div>
        </div>
  );
}
export default Home