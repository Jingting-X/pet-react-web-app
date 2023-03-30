import React, {useState} from "react";

function Signin() {
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
        // Handle login logic here
    };

    return (
        <form className="form-signin text-center mt-5 w-25" onSubmit={handleSubmit}>
            <img className="mb-4 rounded-circle" src="/img/do1.jpeg" alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email"
                   id="inputEmail"
                   value={email}
                   className="form-control mb-1"
                   placeholder="Email address"
                   onChange={handleEmailChange}
                   required
                   autoFocus/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password"
                   id="inputPassword"
                   value={password}
                   className="form-control mb-1"
                   placeholder="Password"
                   onChange={handlePasswordChange}
                   required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>

    );
}

export default Signin;