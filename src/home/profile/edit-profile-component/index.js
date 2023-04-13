import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile-reducer";
import {Link} from "react-router-dom";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const currProfile = {
        'firstName': profile.firstName,
        'lastName': profile.lastName,
        'handle': profile.handle,
        'profilePicture': profile.profilePicture,
        'bannerPicture': profile.bannerPicture,
        'bio': profile.bio,
        'location': profile.location,
        'dateOfBirth': profile.dateOfBirth,
        'dateJoined': profile.dateJoined,
        'followingCount': profile.followingCount,
        'followersCount': profile.followersCount
    };

    const updateProfileDispatch = useDispatch();
    const updateProfileClickHandler = () => {
        const newName = document.getElementById("profileName").value;
        const nameArray = newName.split(" ");
        if (nameArray.length >= 1) {
            currProfile.firstName = nameArray[0];
        }
        if (nameArray.length >= 2) {
            currProfile.lastName = nameArray[1];
        }

        currProfile.bio = document.getElementById("profileBio").value;
        currProfile.location = document.getElementById("profileLocation").value;
        currProfile.dateOfBirth = document.getElementById("profileBirthOfDate").value;

        updateProfileDispatch(updateProfile(currProfile));
    }

    return (
        <div className="border p-2">
            <div className="row align-items-center pb-2">
                <div className="col-1">
                    <Link to="/profile">
                        <i className="bi bi-x-lg float-end" style={{color: "grey"}}></i>
                    </Link>
                </div>
                <div className="col-9">
                    <div className="fw-bolder">Edit profile</div>
                </div>
                <div className="col-2 float-end">
                    <Link to="/profile">
                        <button onClick={updateProfileClickHandler} className="btn btn-dark rounded-pill float-end">Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-polyglot" src={`/img/${profile.bannerPicture}`} alt=""/>
                <img className="wd-avatar rounded-circle" src={`/img/${profile.profilePicture}`} alt=""/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">First Name</label>
                <input id="firstName" className="form-control border-0"
                       defaultValue={`${profile.firstName}`}/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Last Name</label>
                <input id="lastName" className="form-control border-0"
                       defaultValue={`${profile.lastName}`}/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Description</label>
                <textarea id="profileBio" className="form-control border-0" defaultValue={`${profile.bio}`}/>
            </div>

            <div className="mt-4">
                <div className="d-flex align-items-center">
                    <div className="text-secondary">Birth date</div>
                    <div className="ps-1 pe-1">·</div>
                    <button className="wd-stats-button" style={{color: "blue"}}>Edit</button>
                </div>
            </div>
            <input id="profileBirthOfDate" className="form-control border-0"
                   defaultValue={`${profile.dateOfBirth}`}/>

        </div>
    );

};

export default EditProfileComponent;
