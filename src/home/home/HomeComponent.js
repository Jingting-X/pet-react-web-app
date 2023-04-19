import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostSummaryList from "../post-summary-list/index.js";
import SearchBar from "../search-bar";
import '../../styles/app.css'
import {findFollowsByFollowedId} from "../../services/follows-service";
import * as followsService from "../../services/follows-service";
import {useSelector} from "react-redux";
const HomeComponent = () => {
  // const {currentUser} = useSelector(state => state.users);
  // const [following, setFollowing] = useState([]);
  // useEffect(() => {
  //   checkFollowing();
  // }, []);
  //
  // const checkFollowing = async() => {
  //   const res = await followsService.findFollowsByFollowedId(currentUser._id);
  //   if (res.length > 0) {
  //     console.log("This user has following.")
  //     setFollowing(following)
  //   }
  // }

  return (
    <div className="d-flex flex-column align-content-start justify-content-start">
      <div className="bg-light d-flex align-items-center">
        <SearchBar />
      </div>

      <div className="position-relative">
        <div
          id="carouselExampleControls"
          className="carousel slide mt-2 mb-3 rounded-5"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img
                src="../img/do1.jpeg"
                className="d-block w-100"
                alt="First slide"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="../img/do2copy.jpeg"
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="../../img/do3copy.jpeg"
                className="d-block w-100"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img
                src="../../img/do4.jpeg"
                className="d-block w-100"
                alt="Third slide"
              />
            </div>

          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/*{following.length === 0 ? (*/}
      {/*    <p className="text-center">You are not following anyone yet.</p>*/}
      {/*) : (*/}
          <PostSummaryList />
      {/*)}*/}
    </div>
  );
};
export default HomeComponent;
