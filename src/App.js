import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Home from "./home";
import Signin from "./signin";
import Signup from "./signup";

function App() {
  return(
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/home/*" element={<Home/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;