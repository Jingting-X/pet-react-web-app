import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersThunk, deleteUserThunk } from '../services/users-thunks.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal';
import { useNavigate } from 'react-router-dom';

function AdminUsersScreen() {
    const { currentUser, users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUsersThunk());
    }, []);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const openDeleteModal = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };

    const handleDeleteUserById = async () => {
        await dispatch(deleteUserThunk(userToDelete._id));
        dispatch(getUsersThunk());
        setShowDeleteModal(false);
    };

    return (
        <>
            {!currentUser || currentUser.role !== "Admin" ? (
                <div className='container bg-light p-4 mb-5'>
                    <h2>You are not allowed to browse this page, please <a href='/signin'>sign in</a>.</h2>
                    <div style={{ height: '85px' }}>
                    </div>
                </div>) : (
                <div className='container'>
                    <button className='btn btn-light border'
                        onClick={() => navigate('/admin')}>
                        <i className="fas fa-arrow-left me-2"></i>Back
                    </button>
                    <ul className="list-group mt-3">
                        {users.map((user) => (
                            <li className="list-group-item" key={user._id}>
                                {user.firstName} {user.lastName}
                                <button className="btn btn-danger float-end me-3" onClick={() => openDeleteModal(user)}>
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                    <DeleteConfirmationModal
                        show={showDeleteModal}
                        // userToDelete={userToDelete}
                        onDelete={handleDeleteUserById}
                        onCancel={() => setShowDeleteModal(false)}
                    />
                </div>)}
        </>
    );
}

export default AdminUsersScreen;
