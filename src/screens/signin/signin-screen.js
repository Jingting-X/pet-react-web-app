import React, {useState} from "react";
import {Link} from "react-router-dom";
// import {useDispatch} from "react-redux";
function SigninScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    // const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle signin logic here
        // dispatch(signinReducer(currentUser))
    };

    return (

            <section className="mt-3">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 col-xl-8">
                            <div className="card text-black wd-border" >
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                                            <form className="mx-1 mx-md-4">
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
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <p>
                                                        Don't have an account?{" "}
                                                        <Link to="/signup">Sign up</Link>
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button"
                                                            className="btn btn-primary btn-lg"
                                                            onClick={handleSubmit}
                                                    >Sign in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div
                                            className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1">
                                            <img
                                                src="../img/dog-signin.jpeg"
                                                className="img-fluid" alt="Signin image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

    );
}

export default SigninScreen;