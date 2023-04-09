import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { getUsersThunk } from '../services/users-thunks.js';
function UsersScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // if (!currentUser || currentUser.role !== 'admin') {
    //     navigate('/signin');
    // }

    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    return (
        <ul className='list-group mt-3'>
            {users && users.map(user => (
                <li className='list-group-item' key={user._id}>
                    {user.firstName} {user.lastName}
                    <button className='btn btn-danger float-end me-3'>Delete</button>
                    <button 
                    // onClick={() => navigate(`/profile/${user.id}`)}
                    className='btn btn-warning float-end me-3'>Edit</button>
                </li>
            ))}
        </ul>
    )
}



export default UsersScreen;