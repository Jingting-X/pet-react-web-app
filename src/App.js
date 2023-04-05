import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Home from "./home";
import AdminComponent from "./admin";

function App() {
  return(
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/home/*" element={<Home/>}/>
            <Route path="/admin" element={<AdminComponent/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;