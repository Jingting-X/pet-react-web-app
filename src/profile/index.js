import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link, useParams} from "react-router-dom";
import PostSummaryList from "../home/post-summary-list";
import CreatePostComponent from "./create-post-component";
import PostList from "../posts/post-list";
import {getUserById} from "../services/users-service";
import {getUserByIdThunk} from "../services/users-thunks";


const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const dateOfBirth = BirthdateConvert(currentUser.birthdate);
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch(getUserByIdThunk);
    }, [])

    // const dateOfJoin = JoinDateConvert(currentUser.joinedDate);
    return (
        <div className="border p-2">
            <div className="row pb-2">
                <div className="col-1">
                    <Link to="/">
                        <div className="bi bi-arrow-left pt-2 fw-bolder"></div>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bolder">{currentUser.firstName} {currentUser.lastName}</div>
                    {/*<div className="text-secondary small">10 Posts</div>*/}
                </div>
            </div>
            <div className="pos-relative">
                {/*<img className="wd-polyglot" src={`/img/${currentUser.bannerPicture}`} alt=""/>*/}
                {/*<img className="wd-avatar rounded-circle" src={`/img/${currentUser.profilePicture}`} alt=""/>*/}
                <Link to="/edit-profile">
                    <button className="btn btn-dark rounded-pill float-end m-2">Edit Profile</button>
                </Link>
            </div>
            <div>
                <div className="fw-bolder">{currentUser.firstName} {currentUser.lastName}</div>
                <div className="text-secondary">{currentUser.handle}</div>
            </div>
            <div className="pt-2">
                {currentUser.bio}
            </div>
            <div className="row pt-2">
                <div className="col-4">
                    <span className="bi bi-geo-alt text-secondary"></span>
                    <span className="ps-1">{currentUser.location}</span>
                </div>
                <div className="col-4">
                    <span className="bi bi-balloon text-secondary"></span>
                    <span className="ps-1">Born {dateOfBirth}</span>
                </div>

                {/*<div className="col-4">*/}
                {/*    <span className="bi bi-calendar3 text-secondary"></span>*/}
                {/*    <span className="ps-1">Joined {currentUser.joinedDate}</span>*/}
                {/*</div>*/}
            </div>

            {/*<div className="pt-2 row">*/}
            {/*    <div className="col-3">*/}
            {/*        <span className="fw-bolder">{currentUser.followingCount}</span> Following*/}
            {/*    </div>*/}
            {/*    <div className="col-3">*/}
            {/*        <span className="fw-bolder col-4">{currentUser.followersCount}</span> Followers*/}
            {/*    </div>*/}
            {/*</div>*/}
            <br></br>
            <CreatePostComponent/>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="src/profile#posts.html">Posts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="src/profile#comments.html">Comments</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="src/profile#likes.html">Likes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="src/profile#bookmarks.html">Bookmarks</a>
                </li>
            </ul>
            <PostList/>
        </div>

    );

};

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const BirthdateConvert = (date) => {
    if (date == null) return;
    const birthDate = date.split("/");
    const month = birthDate[0] - 1;
    return months[month] + " " + birthDate[1] + ", " + birthDate[2];
}
export const JoinDateConvert = (date) => {
    if (date == null) return;
    const joinDate = date.split("/");
    const joinMonth = joinDate[0] - 1;
    return months[joinMonth] + ", " + joinDate[1];
}

export default ProfileComponent;
