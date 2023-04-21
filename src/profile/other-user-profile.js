import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserById} from "../services/users-service";
import {useNavigate} from "react-router";
import {BirthdateConvert} from "./index";
import * as followsService from "../services/follows-service";
import * as likesService from "../services/likes-service";
import * as dislikesService from "../services/dislikes-service";
import PostList from "../posts/post-list";

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
    const [activeTab, setActiveTab] = useState("posts");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const fetchFollowing = async () => {
        const following = await followsService.findFollowsByFollowerId(id);
        console.log("following is:", following);
        setFollowing(following);
    }
    const fetchFollows = async () => {
        const follows = await followsService.findFollowsByFollowedId(id);
        setFollows(follows);
    }

    const fetchDetailsLiked = async () => {
        const details = await likesService.findLikesByUserId(id);
        setDetailsLiked(details);
    }

    const fetchDetailsDisliked = async () => {
        const details = await dislikesService.findDislikesByUserId(id);
        setDetailsDisliked(details);
    }

    const checkFollowed = async () => {
        if (!currentUser) {
            return;
        }
        const res = await followsService.findFollowedOrNot(currentUser._id, id);
        console.log("res of checkFollowed is:", res);
        console.log("currentUser id is:", currentUser._id);
        if (res !== null) {
            console.log("This user is being Followed")
            setFollowed(true)
        } else {
            console.log("This user is not being Followed")
        }
    }

    const followUser = async () => {
        if (!currentUser) {
            alert("Please sign in to follow users.");
            return;
        }
        const response = await followsService.userFollowsUser(currentUser._id, id)
        setFollowed(true);
        console.log("click follow, response is:", response);
    }

    const unfollowUser = async () => {
        const response = await followsService.unfollowUser(currentUser._id, id)
        setFollowed(false);
        console.log("click unfollow, response is:", response);
    }

    const fetchUser = async () => {
        const user = await getUserById(id);
        setUser(user);
        setIsLoading(false);
    };

    useEffect(() => {
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
                {currentUser ? (
                    <>
                        <div className="col-4">
                            <span className="bi bi-geo-alt text-secondary"></span>
                            <span className="ps-1">{user.location}</span>
                        </div>
                        <div className="col-4">
                            <span className="bi bi-balloon text-secondary"></span>
                            <span className="ps-1">Born {dateOfBirth}</span>
                        </div>
                    </>
                ) : null}
            </div>
            <div className="pt-2 row">
                <div className="col-3">
                    <span className="fw-bolder">{following.length}</span> Following
                </div>
                <div className="col-3">
                    <span className="fw-bolder col-4">{follows.length}</span> Followers
                </div>
            </div>
            <br></br>

            <div className="mt-3">
                <div className="row">
                    <div className="col-auto">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "posts" && "active"}`}
                                onClick={() => handleTabChange("posts")}
                            >
                                Posts
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "likes" && "active"}`}
                                onClick={() => handleTabChange("likes")}
                            >
                                Likes
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "following" && "active"}`}
                                onClick={() => handleTabChange("following")}
                            >
                                Following
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "followers" && "active"}`}
                                onClick={() => handleTabChange("followers")}
                            >
                                Followers
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "likedDetails" && "active"}`}
                                onClick={() => handleTabChange("likedDetails")}
                            >
                                Liked Details
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <ul className="list-group">
                            <li
                                className={`list-group-item tab-group ${activeTab === "dislikedDetails" && "active"}`}
                                onClick={() => handleTabChange("dislikedDetails")}
                            >
                                Disliked Details
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-9">
                <div className="tab-content">
                    {activeTab === "posts" && (
                        <div className="tab-pane show active">
                            <PostList/>
                        </div>
                    )}
                    {activeTab === "likes" && (
                        <div className="tab-pane show active">
                            <h1>Likes Tab Content</h1>
                        </div>
                    )}
                    {activeTab === "following" && (
                        <div className="tab-pane show active">
                            {/*<h1>Following Tab Content</h1>*/}
                            {following && (<div>
                                <ul className="list-group">
                                    {following.map((follow) => (
                                        <li className="list-group-item bg-transparent border-0">
                                            <Link to={`/profile/${follow.followed._id}`}>
                                                <h3>{follow.followed.firstName} {follow.followed.lastName}</h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>)
                            }
                        </div>
                    )}
                    {activeTab === "followers" && (
                        <div className="tab-pane show active">
                            {follows && (<div>
                                <ul className="list-group">
                                    {follows.map((follower) => (
                                        <li className="list-group-item bg-transparent border-0">
                                            <Link to={`/profile/${follower.follower._id}`}>
                                                <h3>{follower.follower.firstName} {follower.follower.lastName}</h3>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>)
                            }
                        </div>
                    )}
                    {activeTab === "likedDetails" && (
                        <div className="tab-pane show active">
                            {detailsLiked && (<div>
                                <ul className="list-group">
                                    {detailsLiked.map((detail) => (
                                        <li className="list-group-item bg-transparent border-0">
                                            <Link to={`/dogs/search/detail/${detail.detailId}`}><h3>{detail.detailId}</h3> </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>)
                            }
                        </div>
                    )}

                    {activeTab === "dislikedDetails" && (
                        <div className="tab-pane show active">
                            {detailsDisliked && (<div>
                                <ul className="list-group">
                                    {detailsDisliked.map((detail) => (
                                        <li className="list-group-item bg-transparent border-0">
                                            <Link to={`/dogs/search/detail/${detail.detailId}`}><h3>{detail.detailId}</h3> </Link>

                                        </li>
                                    ))}
                                </ul>
                            </div>)
                            }
                        </div>
                    )}
                </div>
            </div>

        </div>



    );
};

export default OtherUserProfileComponent;