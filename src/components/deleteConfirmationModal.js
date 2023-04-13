import React from 'react';

function DeleteConfirmationModal({ show, userToDelete, onDelete, onCancel }) {
    if (!show || !userToDelete) return null;

    return (
        <div className="modal" tabIndex="-1" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center w-100">Delete User</h5>
                    </div>
                    <div className="modal-body">
                        <p>Do you really want to delete user: <b>{userToDelete.firstName} {userToDelete.lastName}</b>?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteConfirmationModal;
