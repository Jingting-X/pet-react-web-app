import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import PostSummaryList from "../post-summary-list";
import CreatePostComponent from "./create-post-component";


const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const dateOfBirth = BirthdateConvert(profile.dateOfBirth);
    const dateOfJoin = JoinDateConvert(profile.dateJoined);

    return (
        <div className="border p-2">
            <div className="row pb-2">
                <div className="col-1">
                    <Link to="/">
                        <div className="bi bi-arrow-left pt-2 fw-bolder"></div>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bolder">{profile.firstName} {profile.lastName}</div>
                    <div className="text-secondary small">10 Posts</div>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-polyglot" src={`/img/${profile.bannerPicture}`} alt=""/>
                <img className="wd-avatar rounded-circle" src={`/img/${profile.profilePicture}`} alt=""/>
                <Link to="/edit-profile">
                    <button className="btn btn-dark rounded-pill float-end m-2">Edit Profile</button>
                </Link>
            </div>
            <div>
                <div className="fw-bolder">{profile.firstName} {profile.lastName}</div>
                <div className="text-secondary">{profile.handle}</div>
            </div>
            <div className="pt-2">
                {"The Golden Retriever, an exuberant Scottish gundog of great beauty, stands among America's most popular dog breeds. They are serious workers at hunting and field work, as guides for the blind, and in search-and-rescue, enjoy obedience and other competitive events, and have an endearing love of life when not at work. "}
            </div>
            <div className="row pt-2">
                <div className="col-4">
                    <span className="bi bi-geo-alt text-secondary"></span>
                    <span className="ps-1">{profile.location}</span>
                </div>
                <div className="col-4">
                    <span className="bi bi-balloon text-secondary"></span>
                    <span className="ps-1">Born {dateOfBirth}</span>
                </div>

                <div className="col-4">
                    <span className="bi bi-calendar3 text-secondary"></span>
                    <span className="ps-1">Joined {dateOfJoin}</span>
                </div>
            </div>

            <div className="pt-2 row">
                <div className="col-3">
                    <span className="fw-bolder">{profile.followingCount}</span> Following
                </div>
                <div className="col-3">
                    <span className="fw-bolder col-4">{profile.followersCount}</span> Followers
                </div>
            </div>
            <br></br>
            <CreatePostComponent/>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="#posts.html">Posts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#comments.html">Comments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#likes.html">Likes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#bookmarks.html">Bookmarks</a>
                </li>
            </ul>
            <PostSummaryList/>
        </div>

    );

};

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const BirthdateConvert = (date) => {
    const birthDate = date.split("/");
    const month = birthDate[0] - 1;
    return months[month] + " " + birthDate[1] + ", " + birthDate[2];
}
export const JoinDateConvert = (date) => {
    const joinDate = date.split("/");
    const joinMonth = joinDate[0] - 1;
    return months[joinMonth] + ", " + joinDate[1];
}

export default ProfileComponent;
