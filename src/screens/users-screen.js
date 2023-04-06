import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { getUsersThunk } from '../services/users-thunks.js';
function UsersScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (!currentUser || currentUser.role !== 'admin') {
        navigate('/signin');
    }

    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    return (
        <ul className='list-group'>
            {users && users.map(user => (
                <li className='list-group-item' key={user.id}>
                    {user.firstName} {user.lastName}
                    <button 
                    // onClick={() => navigate(`/profile/${user.id}`)}
                    className='btn btn-warning float-right me-1'>Edit</button>
                    <button className='btn btn-danger float-right'>Delete</button>
                </li>
            ))}
        </ul>
    )
}



export default UsersScreen;