import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from "./home";
import AdminComponent from "./admin";
import Footnote from "./home/Footnote";
import './styles/app.css'

import Signin from "./signin";
import Signup from "./signup";


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
                        <Route path="/admin" element={<AdminComponent/>}/>

                        <Route path="/signin" element={<Signin/>}/>
                        <Route path="/signup" element={<Signup/>}/>
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