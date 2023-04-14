import React from 'react'
import {useNavigate} from "react-router";
import './index.css';

export default function SearchBar (){
    let navigate = useNavigate();
    const openSearchScreen = () => {
        navigate('/dogs/search');
    }
    return (
        <div className="form-group has-search">
            <span className="fa fa-search form-control-feedback"/>
            <input type="text" className="form-control" placeholder="Search in Dogs API" onClick={openSearchScreen} />
        </div>
)
}