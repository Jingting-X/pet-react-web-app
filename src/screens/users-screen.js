import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersThunk, deleteUserThunk } from '../services/users-thunks.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal';

function UsersScreen() {
    const { users } = useSelector((state) => state.users);

    const dispatch = useDispatch();

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
        <div>
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
                userToDelete={userToDelete}
                onDelete={handleDeleteUserById}
                onCancel={() => setShowDeleteModal(false)}
            />
        </div>
    );
}

export default UsersScreen;
