import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const AdminUserManagement = (
    {
        user={user_id:1, user_name:'Alice'}
    }
) => {
    return (
            <ul className="list-group rounded-0">
                <li className="list-group-item d-flex align-items-end">
                    <span className="me-auto">{user.user_name}</span>
                    <i className="fa fa-trash me-3"></i>
                    <i className="fa fa-pencil me-3"></i>
                </li>
            </ul>
        );
}
export default AdminUserManagement;
