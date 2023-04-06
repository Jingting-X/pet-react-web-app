import React, {useState} from "react";
import {Link} from "react-router-dom";
function SignupScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        setPassword(event.target.value);
    };

    const [selectedRole, setSelectedRole] = useState("option1");
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signup logic here
    };

    return (
            <section className="vh-100 wd-section mt-3">
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
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email"
                                                               className="form-control"
                                                               placeholder="Email"
                                                               onChange={handleEmailChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password"
                                                               className="form-control"
                                                               placeholder="Password"
                                                               onChange={handlePasswordChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password"
                                                               className="form-control"
                                                               placeholder="Confirm Password"
                                                               onChange={handlePasswordConfirmChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6 className="mb-2 pb-1">Role</h6>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions"
                                                               value="option1"
                                                               checked={selectedRole === "option1"}
                                                               onChange={handleRoleChange}
                                                        />
                                                        <label className="form-check-label">Personal User</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions"
                                                               value="option2"
                                                               checked={selectedRole === "option2"}
                                                               onChange={handleRoleChange}
                                                        />
                                                        <label className="form-check-label">Service Provider</label>
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio"
                                                               name="inlineRadioOptions"
                                                               value="option3"
                                                               checked={selectedRole === "option3"}
                                                               onChange={handleRoleChange}
                                                        />
                                                        <label className="form-check-label">Admin</label>
                                                    </div>

                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <p>
                                                        Already have an account?{" "}
                                                        <Link to="/signin">Sign in</Link>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button"
                                                            className="btn btn-primary btn-lg"
                                                            onSubmit={handleSubmit}
                                                    >Sign up
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

export default SignupScreen;