import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import PostSummaryList from "../post-summary-list/index.js";
import SearchBar from "../search-bar";
import '../../styles/app.css'
import CreatePostComponent from "../../posts/create-post-component";

const HomeComponent = () => {

    return (
        <div className="d-flex flex-column align-content-start justify-content-start">
            <div className="bg-light d-flex align-items-center">
                <SearchBar/>
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
                                className="d-block w-100 rounded-5"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="../img/do2copy.jpeg"
                                className="d-block w-100 rounded-5"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="../../img/do3copy.jpeg"
                                className="d-block w-100 rounded-5"
                                alt="Third slide"
                            />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img
                                src="../../img/do4.jpeg"
                                className="d-block w-100 rounded-5"
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
            <CreatePostComponent/>
            <PostSummaryList/>
        </div>
    );
};
export default HomeComponent;
