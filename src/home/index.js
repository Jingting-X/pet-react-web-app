import React from 'react';
import {Routes, Route} from "react-router";
import NavigationSidebarGuest from "./navigation-sidebar/index.js";
import NavigationSidebarUser from "./navigation-sidebar/navigationSidebarUser.js";
import NavigationSidebarAdmin from "./navigation-sidebar/navigationSidebarAdmin.js";
import HomeComponent from "./home/HomeComponent.js";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import whoReducer from "./reducers/who-reducer";
import Calendar from "./calendar-list/calendar-list-item";
import WhoToFollowList from "./who-to-follow-list/index.js";
import WelcomeAdmin from "./welcome-admin";
import Footnote from "./Footnote";


const store = configureStore({
  reducer: {who: whoReducer}
});

function Home() {
  return (
      <Provider store={store}>
        <div className="text-center fw-bold mt-2" style={{fontFamily: 'cursive', fontSize: '80px', color: 'lightpink'}}>
          Dog Land
        </div>

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

        <div>
          <Footnote/>
        </div>
      </Provider>
  );
}
export default Home