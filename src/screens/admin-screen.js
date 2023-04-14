import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import '../styles/app.css'

function AdminScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // if (!currentUser || currentUser.role !== 'admin') {
    //     navigate('/signin');
    // }

    return (
        <div>
             <div className='row'>
                <div className="col-6 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-start">
                    <button className="btn  border" onClick={() => navigate('/home')}>Back Home</button>
                </div>
                <div className='col-6 col-md-4 col-lg-4 col-xl-4 d-md-none d-lg-block'></div>
                <div className="col-6 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-end">
                    <button className="btn  border" onClick={() => navigate('/home/other')}>Log Out</button>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/user_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/users" className="btn btn-primary">User Management</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/post_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/posts" className="btn btn-primary">Post Management</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="img/event_management.jpeg" className="w-100 mb-4" />
                            <a href="/admin/events" className="btn btn-primary">Event Management</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminScreen;
