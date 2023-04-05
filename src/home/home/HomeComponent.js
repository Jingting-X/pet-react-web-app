import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostSummaryList from "../post-summary-list/index.js";
import SearchBar from "../search-bar";
import SearchScreen from "../../dogs";

const HomeComponent = () => {
  return (
      <div className="d-flex flex-column align-content-start justify-content-start">
        <div className="bg-light d-flex align-items-center">
          {/*<div className="position-absolute p-3">*/}
          {/*  <i className="fa-solid fa-magnifying-glass"></i>*/}
          {/*</div>*/}
            <SearchBar/>
            <SearchScreen/>
          {/*<input*/}
          {/*    type="text"*/}
          {/*    placeholder="Search your favorite dog.."*/}
          {/*    className="form-control wd-round-corner bg-light ps-5 ms-3 ms-auto"/>*/}

        </div>

        <div className="position-relative">
          <img src="../../img/dypuppies.png" className="col-sm-12 mt-2 mb-3 rounded-5"/>
        </div>
        <PostSummaryList/>
      </div>
  );
};
export default HomeComponent;
