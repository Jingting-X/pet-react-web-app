import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router';
import Home from "./home";
import Footnote from "./home/Footnote";
import './styles/app.css'
import DogsScreen from "./dogs";
import DogsSearch from "./dogs/dogs-search";
import SigninScreen from "./screens/signin-screen";
import SignupScreen from "./screens/signup-screen";
import AdminScreen from "./screens/admin-screen";
import { Provider } from 'react-redux';
import store from './redux/store';
import UsersScreen from './screens/users-screen';
import DogsDetailScreen from "./dogs/dogs-detail";

function App() {
    return (
        <Provider store={store}>
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
                        <Route path="/users" element={<UsersScreen/>}/>
                        <Route path="/dogs" element={<DogsScreen/>}/>
                        <Route path="/dogs/search" element={<DogsSearch/>}/>
                        <Route path="/dogs/search/:searchTerm" element={<DogsSearch/>}/>
                        <Route path="/dogs/search/detail/:id" element={<DogsDetailScreen/>} />
                    </Routes>
                </div>
                <div>
                    <Footnote/>
                </div>
            </div>
        </BrowserRouter>
        </Provider>
    );
}

export default App;