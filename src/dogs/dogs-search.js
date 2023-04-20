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

    // console.log("results is:", results);

    return (
        <Provider store={store}>
            <div className="ms-5 me-5 container">
                <button className='btn border'
                    onClick={() => navigate(`/home`)}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                </button>
                <h1 className="display-5">Search in Dogs API</h1>
                <button className="float-end btn btn-primary" onClick={searchDogs}>
                    Search
                </button>
                <input
                    className="form-control w-75"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {currentUser && (
                    <div className="mt-2">
                        <strong>Logged in as: {currentUser.firstName}</strong>
                    </div>
                )}
                <ul className="list-group">
                    {
                        results && Object.keys(results).map((dog, idx) => (
                            <li className="list-group-item border-0" key={idx}>
                                <img src={results[dog].url} width={400} height={300} alt={results[dog].id} />
                                <Link to={`/dogs/search/detail/${results[dog].id}`}> Check on my details!</Link>
                                {/*<DogStats key={results[dog].id} dog={results[dog].id}/>*/}
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

