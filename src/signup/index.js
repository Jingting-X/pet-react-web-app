import React, {useState} from "react";
import styles from "./style.css";
import {Link} from "react-router-dom";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here
    };

    return (
            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0 row wd-name-container">
                                                        <input type="text"
                                                               className="form-control col wd-name"
                                                               placeholder="First Name"/>
                                                        <input type="text"
                                                               className="form-control col wd-name"
                                                               placeholder="Last Name"/>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email"
                                                               className="form-control"
                                                                placeholder="Email"/>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password"
                                                               className="form-control"
                                                                placeholder="Password"/>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password"
                                                               className="form-control"
                                                                placeholder="Confirm Password"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">

                                                    <h6 className="mb-2 pb-1">Role</h6>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions" id="femaleGender"
                                                               value="option1" checked/>
                                                        <label className="form-check-label"
                                                               htmlFor="femaleGender">Personal User</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions" id="maleGender"
                                                               value="option2"/>
                                                        <label className="form-check-label"
                                                               htmlFor="maleGender">Service Provider</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions" id="otherGender"
                                                               value="option3"/>
                                                        <label className="form-check-label"
                                                               htmlFor="otherGender">Admin</label>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <p>
                                                        Already have an account?{" "}
                                                        <Link to="/signin">Sign in</Link>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg">Sign up
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="../img/dog-signup.jpeg"
                                                className="img-fluid" alt="Signup image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
}

export default Signup;