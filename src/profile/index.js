import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";
import PostList from "../posts/post-list";
import {useNavigate} from "react-router-dom";
import * as followsService from "../services/follows-service";
import * as likesService from "../services/likes-service";
import * as dislikesService from "../services/dislikes-service";
import {getUserById} from "../services/users-service";

const ProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] = useState([]);
    const [detailsLiked, setDetailsLiked] = useState([]);
    const [detailsDisliked, setDetailsDisliked] = useState([]);
    const [activeTab, setActiveTab] = useState("posts");
    const [isLoading, setIsLoading] = useState(true);

    const dateOfBirth = user.birthdate ? BirthdateConvert(user.birthdate) : "";

    const fetchUser = async () => {
        const fetchedUser = await getUserById(currentUser._id);
        setUser(fetchedUser);
        setIsLoading(false);
    };

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };

    const fetchFollowing = async () => {
        const following = await followsService.findFollowsByFollowerId(currentUser._id);
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

    useEffect(() => {
        fetchUser()
        fetchFollowing()
        fetchFollows()
        fetchDetailsLiked()
        fetchDetailsDisliked()
    }, [])

    return (
        <div className="container bg-light w-75 border p-5 pt-3">
            <div className="row pb-2">
                <div className="col-3">
                    <button className='btn btn-light border'
                            onClick={() => navigate(`/home`)}>
                        <i className="fas fa-arrow-left me-2"></i>Back Home
                    </button>
                </div>
            </div>
            <div className="pos-relative">
                {!isLoading && (user.banner ? (
                    <img className="wd-banner"
                         src={`${user.banner}`}
                         alt=""/>
                ) : (
                    <img className="wd-banner"
                         src="/img/default-banner.png"
                         alt=""/>
                ))}
                {!isLoading && (user.avatar ? (
                    <img className="wd-avatar rounded-circle"
                         src={`${user.avatar}`}
                         alt=""/>
                ) : (
                    <img className="wd-avatar rounded-circle"
                         src="/img/default-avatar.png"
                         alt=""/>
                ))}
                <Link to="/edit-profile">
                    <button className="btn btn-light float-end fw-bolder m-2 border rounded-pill">Edit Profile</button>
                </Link>
            </div>

            <div>
                <div className="fw-bolder">{user.firstName} {user.lastName}</div>
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

                    {/*<div className="col-auto">*/}
                    {/*    <ul className="list-group">*/}
                    {/*        <li*/}
                    {/*            className={`list-group-item tab-group ${activeTab === "comments" && "active"}`}*/}
                    {/*            onClick={() => handleTabChange("comments")}*/}
                    {/*        >*/}
                    {/*            Comments*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

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

            <div className="col-md-9 pt-3">
                <div className="tab-content border">
                    {activeTab === "posts" && (
                        <div className="tab-pane show active">
                            <PostList/>
                        </div>
                    )}
                    {activeTab === "comments" && (
                        <div className="tab-pane show active">
                            <h1>Commented posts Tab Content</h1>
                        </div>
                    )}
                    {activeTab === "following" && (
                        <div className="tab-pane show active">
                            {following && (<div>
                                <ul className="list-group bg-transparent">
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
                                            <Link to={`/dogs/search/detail/${detail.detailId}`}>
                                                <h3>{detail.detailId}</h3></Link>
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
                                            <Link to={`/dogs/search/detail/${detail.detailId}`}>
                                                <h3>{detail.detailId}</h3></Link>

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

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const BirthdateConvert = (date) => {
    if (!date || date === "undefined/undefined/") {
        return "";
    }
    const birthDate = date.split("/");
    const month = birthDate[0] - 1;
    return months[month] + " " + birthDate[1] + ", " + birthDate[2];
}

export default ProfileComponent;
