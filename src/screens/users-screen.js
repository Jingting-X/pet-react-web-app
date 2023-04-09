import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { getUsersThunk, deleteUserThunk } from '../services/users-thunks.js';
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

    const handleDeleteUserById = (_id) => {
        dispatch(deleteUserThunk(_id));
    }
    return (
        <ul className='list-group mt-3'>
            {users && users.map(user => (
                <li className='list-group-item' key={user._id}>
                    {user.firstName} {user.lastName}
                    <button className='btn btn-danger float-end me-3'
                    onClick={() => handleDeleteUserById(user._id)}>Delete</button>
            
                </li>
            ))}
        </ul>
    )
}



export default UsersScreen;