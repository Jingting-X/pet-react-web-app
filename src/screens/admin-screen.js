import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import '../styles/app.css'
import { signoutThunk } from '../services/users-thunks.js';
import "../index.css";
function AdminScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        await dispatch(signoutThunk());
        navigate('/home')
    }

    return (
        <div className='container'>
             <div className='row'>
                <div className="col-4 d-flex justify-content-start">
                    <button className="btn btn-light border" onClick={() => navigate('/home')}>
                    <i className="fas fa-arrow-left me-2"></i>
Back Home</button>
                </div>
                <div className='col-4'></div>
                <div className="col-4 d-flex justify-content-end">
                    <button className="btn btn-light border" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/user_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/users" className="btn btn-primary buttons text-dark">User Management</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/post_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/posts" className="btn btn-primary buttons text-dark">Post Management</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/event_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/events" className="btn btn-primary buttons text-dark">Event Management</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminScreen;
