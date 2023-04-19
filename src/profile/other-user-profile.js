import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserById} from "../services/users-service";
import CreatePostComponent from "../posts/create-post-component";
import PostList from "../posts/post-list";
import {useNavigate} from "react-router";
import {BirthdateConvert} from "./index";
import * as followsService from "../services/follows-service";
import * as likesService from "../services/likes-service";
import * as dislikesService from "../services/dislikes-service";

const OtherUserProfileComponent = () => {

    const {id} = useParams();
    const {currentUser} = useSelector(state => state.users);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const [followed, setFollowed] = useState(false);
    const [detailsLiked, setDetailsLiked] = useState([]);
    const [detailsDisliked, setDetailsDisliked] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchFollowing = async () => {
        const following = await followsService.findFollowsByFollowerId(currentUser._id);
        console.log("following is:", following);
        setFollowing(following);
    }
    const fetchFollows = async () => {
        const follows = await followsService.findFollowsByFollowedId(currentUser._id);
        setFollows(follows);
    }

    const fetchDetailsLiked = async () => {
        const details = await likesService.findLikesByUserId(currentUser._id);
        setDetailsLiked(details);
    }

    const fetchDetailsDisliked = async () => {
        const details = await dislikesService.findDislikesByUserId(currentUser._id);
        setDetailsDisliked(details);
    }

    // currentUser._id shoule be the logged in user, id should be the profile's user id
    // before a user's profile page can be retrieved, these two are the same for now
    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const checkFollowed = async () => {
        const res = await followsService.findFollowedOrNot(currentUser._id, id);
        if (res && res.length > 0) {
            console.log("This user is being Followed")
            setFollowed(true)
        }
    }

    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const followUser = async () => {
        const response = await followsService.userFollowsUser(currentUser._id, id)
        setFollowed(true);
        console.log("click follow, response is:", response);
    }

    // TODO: UPDATE SECOND CURRENTUSER._ID TO ID
    const unfollowUser = async () => {
        const response = await followsService.unfollowUser(currentUser._id, id)
        setFollowed(false);
        console.log("click unfollow, response is:", response);
    }


    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(id);
            setUser(user);
            setIsLoading(false);
        };
        fetchUser();
        checkFollowed();
        fetchFollowing();
        fetchFollows();
        fetchDetailsLiked();
        fetchDetailsDisliked();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    console.log(user.birthdate);
    const dateOfBirth = BirthdateConvert(user.birthdate);

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
                    {followed ? <button className='btn border float-end' onClick={unfollowUser}>
                        <i className="fas fa-star me-2"/>Unfollow
                    </button> : <button className='btn border float-end' onClick={followUser}>
                        <i className="fa-regular fa-star me-2"/>Follow
                    </button>}
                    {/*<div className="text-secondary small">10 Posts</div>*/}
                </div>
            </div>
            <div>
                <div className="fw-bolder">{user.firstName} {user.lastName}</div>
                {/*<div className="text-secondary">{user.handle}</div>*/}
            </div>
            <div className="pt-2">
                {user.bio}
            </div>
            <div className="row pt-2">
                <div className="col-4">
                    <span className="bi bi-geo-alt text-secondary"></span>
                    <span className="ps-1">{user.location}</span>
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

export default OtherUserProfileComponent;