import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { signupThunk } from '../services/users-thunks.js';
import Modal from "../components/modal.js";

function SignupScreen() {
    const { currentUser } = useSelector(state => state.users);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handlePasswordConfirmChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };
// TODO: error handling while user input existing email address
    const handleSubmit = async () => {
        if (role === '') {
            setShowModal(true);
            setErrorMsg("Please choose a role.");
        } else if (password !== confirmPassword) {
            setShowModal(true);
            setErrorMsg("The passwords don't match, please try again.");
        }  else {
            try {
                const result = await dispatch(signupThunk({ firstName, lastName, email, password, role }));
                if (result.error) {
                    setErrorMsg(result.error.message);
                    setShowModal(true);
                } else {
                    setErrorMsg(""); // Clear the error state
                    navigate("/home");
                }
            } catch {
                setErrorMsg("An unexpected error occurred");
                setShowModal(true);
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className="mt-3">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-7 col-xl-8">
                    <div className="card text-black">
                        <div className="card-body">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                    <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4">Sign up</p>
                                    <form className="mx-1 mx-md-4">
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0 row wd-name-container">
                                                <input type="text"
                                                    className="form-control col wd-name"
                                                    placeholder="First Name"
                                                    onChange={handleFirstNameChange}
                                                />
                                                <input type="text"
                                                    className="form-control col wd-name"
                                                    placeholder="Last Name"
                                                    onChange={handleLastNameChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    onChange={handleEmailChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={handlePasswordChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-2">
                                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <input type="password"
                                                    className="form-control"
                                                    placeholder="Confirm Password"
                                                    onChange={handlePasswordConfirmChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h6 className="mb-2 pb-1">Role</h6>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                    name="inlineRadioOptions"
                                                    value="Personal User"
                                                    checked={role === "Personal User"}
                                                    onChange={handleRoleChange}
                                                />
                                                <label className="form-check-label">Personal User</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                    name="inlineRadioOptions"
                                                    value="Service Provider"
                                                    checked={role === "Service Provider"}
                                                    onChange={handleRoleChange}
                                                />
                                                <label className="form-check-label">Service Provider</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio"
                                                    name="inlineRadioOptions"
                                                    value="Admin"
                                                    checked={role === "Admin"}
                                                    onChange={handleRoleChange}
                                                />
                                                <label className="form-check-label">Admin</label>
                                            </div>

                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <p>
                                                Already have an account?{" "}
                                                <Link to="/signin">Sign in</Link>
                                            </p>
                                        </div>
                                        <div className="d-flex justify-content-center mx-4">
                                            <button type="button"
                                                className="btn btn-primary text-dark btn-lg buttons"
                                                onClick={handleSubmit}
                                            >Sign up
                                            </button>
                                            <Modal show={showModal} message={errorMsg} onClose={closeModal} />
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                                    <img
                                        src="../img/dog-signup.jpeg"
                                        className="img-fluid" alt="Signup image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default SignupScreen;