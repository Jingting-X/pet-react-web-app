import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile-reducer";
import {Link, useParams} from "react-router-dom";
import {
    getUserByIdThunk,
    updateUserProfileByIdThunk,
    updateUserThunk,
    userProfileThunk
} from "../../../services/users-thunks";

const EditProfileComponent = () => {
    const {currentUser} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        // const newName = document.getElementById("profileName").value;
        // const nameArray = newName.split(" ");
        // if (nameArray.length >= 1) {
        //     currProfile.firstName = nameArray[0];
        // }
        // if (nameArray.length >= 2) {
        //     currProfile.lastName = nameArray[1];
        // }
        const newFirstname = document.getElementById('firstName').value;
        const newLastname = document.getElementById('lastName').value;
        const newBio = document.getElementById('bio').value;
        const newLocation = document.getElementById('location').value;
        const newBirthdate = document.getElementById('birthdate').value;
        const newJoinedDate = document.getElementById('joinedDate').value;
        console.log("---------5-----------");
        console.log(newFirstname);
        const currProfile = {
            ...currentUser,
            'firstName': newFirstname,
            'lastName':newLastname,
            'bio': newBio,
            'location':newLocation,
            'birthdate': newBirthdate,
            'joinedDate': newJoinedDate,
        };
        console.log("---------6-----------");
        console.log(currProfile.firstName);
        dispatch(updateUserProfileByIdThunk(currProfile))
        // dispatch(updateUserThunk(currProfile))
        console.log("---------7-----------");
        console.log(currentUser.firstName);
        // dispatch(userProfileThunk());
        dispatch(getUserByIdThunk);

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
            {/*<div className="pos-relative">*/}
            {/*    <img className="wd-polyglot" src={`/img/${profile.bannerPicture}`} alt=""/>*/}
            {/*    <img className="wd-avatar rounded-circle" src={`/img/${profile.profilePicture}`} alt=""/>*/}
            {/*</div>*/}
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">First Name</label>
                <input id="firstName" className="form-control border-0"
                       defaultValue={`${currentUser.firstName}`}/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Last Name</label>
                <input id="lastName" className="form-control border-0"
                       defaultValue={`${currentUser.lastName}`}/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Description</label>
                <textarea id="bio" className="form-control border-0" defaultValue={`${currentUser.bio}`}/>
            </div>
            <div className="border pt-2 mt-4 rounded-1">
                <label className="text-secondary ps-2">Location</label>
                <input id="profileLocation" className="form-control border-0" defaultValue={`${currentUser.location}`}/>
            </div>
            <div className="mt-4">
                <div className="d-flex align-items-center">
                    <div className="text-secondary">Birth date</div>
                    <div className="ps-1 pe-1">·</div>
                    <button style={{color: "blue"}}>Edit</button>
                </div>
            </div>
            <input id="birthdate" className="form-control border-0"
                   defaultValue={`${currentUser.birthdate}`}/>

        </div>
    );

};

export default EditProfileComponent;
