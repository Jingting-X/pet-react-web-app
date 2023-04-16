import React from "react";
import { useSelector } from "react-redux";
import "../../styles/app.css"
const Welcome = () => {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <>
            {currentUser &&
                <div class="list-group fw-bold mb-4 rounded-circle text-center"
                    style={{ fontSize: '20px', color: 'gray' }}>
                    <span>
                        Welcome back!{'   '}{currentUser.firstName}
                        <i className="fas fa-paw ms-2 wd-paw-icon"></i>
                    </span>
                </div>
            }</>
    )
}
export default Welcome;