import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunk, deleteUserThunk } from '../services/users-thunks.js';
function UsersScreen() {
    const {users} = useSelector(state => state.users);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    const handleDeleteUserById = async (_id) => {
        await dispatch(deleteUserThunk(_id));
        dispatch(getUsersThunk());
    }
    return (
        <ul className='list-group mt-3'>
            {users.map(user => (
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