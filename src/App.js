import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Home from "./home";

function App() {
  return(
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/home/*" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}
export default App;