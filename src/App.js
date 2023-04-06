import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from "./home";
import Footnote from "./home/Footnote";
import './styles/app.css'
import UsersComponent from "./user";
import DogsScreen from "./dogs";
import DogsSearch from "./dogs/dogs-search";
import SigninScreen from "./screens/signin/signin-screen";
import SignupScreen from "./screens/signup/signup-screen";
import AdminScreen from "./screens/admin/admin-screen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="text-center fw-bold mt-2"
                     style={{fontFamily: 'cursive', fontSize: '80px', color: 'lightpink'}}>
                    Dog Land
                </div>
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home/*" element={<Home/>}/>
                        <Route path="/admin" element={<AdminScreen/>}/>
                        <Route path="/signin" element={<SigninScreen/>}/>
                        <Route path="/signup" element={<SignupScreen/>}/>
                        <Route path="/users" element={<UsersComponent/>}/>
                        <Route path="/dogs" element={<DogsScreen/>}/>
                        <Route path="/dogs/search" element={<DogsSearch/>}/>
                    </Routes>
                </div>
                <div>
                    <Footnote/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;