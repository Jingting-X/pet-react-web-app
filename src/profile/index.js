import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link, useParams} from "react-router-dom";
import PostSummaryList from "../home/post-summary-list";
import CreatePostComponent from "./create-post-component";
import PostList from "../posts/post-list";
import {getUserById} from "../services/users-service";
import {getUserByIdThunk} from "../services/users-thunks";
import {useNavigate} from "react-router-dom";
import * as followsService from "../services/follows-service";
import * as service from "../services/likes-service";
import {findFollowedOrNot} from "../services/follows-service";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const dateOfBirth = BirthdateConvert(currentUser.birthdate);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // TODO: id is not added into url yet, need to make sure
    const {id} = useParams();

    const [followed, setFollowed] = useState(false);

    // currentUser._id shoule be the logged in user, id should be the profile's user id
    // before a user's profile page can be retrieved, these two are the same for now
    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const checkFollowed = async() => {
        const res = await followsService.findFollowedOrNot(currentUser._id, currentUser._id);
        if (res.length > 0) {
           setFollowed(true)
       }
    }

    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const followUser = async() => {
        const response = await followsService.userFollowsUser(currentUser._id, currentUser._id)
        setFollowed(true);
        console.log("click follow, response is:", response);
    }

    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const unfollowUser = async() => {
        const response = await followsService.unfollowUser(currentUser._id, currentUser._id)
        setFollowed(false);
    }

    useEffect(() => {
        dispatch(getUserByIdThunk);
        checkFollowed()
    }, [])

    // const dateOfJoin = JoinDateConvert(currentUser.joinedDate);
    return (

        <div className="border p-2">
            <div className="row pb-2">
                <div className="col-2">
                    <button className='btn border'
                            onClick={() => navigate(`/home`)}>
                        <i className="fas fa-arrow-left me-2"/>Back
                    </button>
                </div>
                <div className="col-10">
                    {/*<div className="fw-bolder">{currentUser.firstName} {currentUser.lastName}</div>*/}
                    {followed? <button className='btn border float-end' onClick={unfollowUser}>
                        <i className="fas fa-star me-2"/>Unfollow
                    </button>: <button className='btn border float-end' onClick={followUser}>
                        <i className="fa-regular fa-star me-2"/>Follow
                    </button>}
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
                <li className="nav-item">
                    <a className="nav-link" href="src/profile#followers.html">Followers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="src/profile#following.html">Following</a>
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
