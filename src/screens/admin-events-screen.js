import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findEventsThunk, deleteEventThunk } from '../services/event-thunks.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal.js';
import { useNavigate } from 'react-router-dom';
function AdminEventsScreen() {
    const { events } = useSelector((state) => state.events);
    const { currentUser, users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findEventsThunk());
    }, []);
    const navigate = useNavigate();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    const openDeleteModal = (event) => {
        setEventToDelete(event);
        setShowDeleteModal(true);
    };

    const handleDeleteEventById = async () => {
        await dispatch(deleteEventThunk(eventToDelete._id));
        dispatch(findEventsThunk());
        setShowDeleteModal(false);
    };

    return (
        <>
        {!currentUser || currentUser.role !== "admin" ? (
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
                {events.map((event) => (
                    <li className="list-group-item" key={event._id}>
                        <div>
                            <h4>{event.title}<button className="btn btn-danger float-end me-3" onClick={() => openDeleteModal(event)}>
                                Delete
                            </button></h4>
                        </div>
                        <div>{event.event}</div>
                    </li>
                ))}
            </ul>
            <DeleteConfirmationModal
                show={showDeleteModal}
                eventToDelete={eventToDelete}
                onDelete={handleDeleteEventById}
                onCancel={() => setShowDeleteModal(false)}
            />
        </div>
        )}
        </>
    );
}


export default AdminEventsScreen;
