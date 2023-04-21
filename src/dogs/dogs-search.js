import React, { useEffect, useState } from "react";
import { fullTextSearch } from "./dogs-service";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import DogStats from "../home/stats";
import detailReducer from "../redux/detail-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";

const store = configureStore(
    { reducer: detailReducer }
);

function DogsSearch() {
    const { searchTerm } = useParams();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState({});
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.users.currentUser);
    const searchDogs = async () => {
        const response = await fullTextSearch(search);
        setResults(response)
        navigate(`/dogs/search/${search}`);
    }
    useEffect(() => {
        if (searchTerm) {
            searchDogs();
        }
    }, [searchTerm]
    );


    const linkStyle = {
        textDecoration: "none"
    }

    // console.log("results is:", results);

    return (
        <Provider store={store}>
            <div className="container w-75 bg-white p-5 pt-3 border">
                <button className='btn btn-light border'
                    onClick={() => navigate(`/home`)}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                </button>
                <h1 className="display-5 mt-4 search-text" >Search in Dogs API</h1>
                <button className="float-end btn btn-primary search-button" onClick={searchDogs}>
                    Search
                </button>
                <input
                    className="form-control w-75"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <ul className="list-group">
                    {
                        results && Object.keys(results).map((dog, idx) => (
                            <li className="list-group-item border-0" key={idx}>
                                <img className="me-2" src={results[dog].url} width={400} height={300} alt={results[dog].id} />
                                <Link to={`/dogs/search/detail/${results[dog].id}`} style={{ textDecoration: "none"}}><i
                                    className="bi bi-chat-heart detail-text">Check on my details!</i></Link>
                            </li>
                        ))
                    }
                </ul>
                {/*<pre>{JSON.stringify(results, null, 2)}</pre>*/}
            </div>
        </Provider>
    );
}

export default DogsSearch

