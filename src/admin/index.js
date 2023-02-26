import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import users from './users.json'
import AdminUserManagement from "./admin_user_management";

const AdminNav = () => {
    return (
        <div className="container mt-2 w-75">
            <ul className="nav nav-tabs border-0">
                <li className="nav-item">
                    <a class="nav-link active text-white fw-bold bg-primary" href="#">User List</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="#">Post List</a>
                </li>
            </ul>
            <ul className="list-group rounded-0">
                {
                    users.map(user =>
                    <AdminUserManagement user={user}/>)
                }
            </ul>
        </div>
        );
}
 export default AdminNav;
