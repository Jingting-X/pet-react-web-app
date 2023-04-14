import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findEventsThunk, deleteEventThunk } from '../services/event-thunks.js';
import DeleteConfirmationModal from '../components/deleteConfirmationModal.js';
import { useNavigate } from 'react-router-dom';
function AdminEventsScreen() {
    const { events } = useSelector((state) => state.events);

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
        <div>
            <button className='btn border'
                onClick={() => navigate('/admin')}>
                <i className="fas fa-arrow-left me-2"></i>Back
            </button>
            <ul className="list-group mt-3">
                {events.map((event) => (
                    <li className="list-group-item" key={event._id}>
                        {event._id} {event.tuit}
                        <button className="btn btn-danger float-end me-3" onClick={() => openDeleteModal(event)}>
                            Delete
                        </button>
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
    );
}


export default AdminEventsScreen;
