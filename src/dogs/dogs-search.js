import {useEffect, useState} from "react";
import { fullTextSearch} from "./dogs-service";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import DogStats from "../home/stats";

function DogsSearch() {
    const {searchTerm} = useParams();
    const [search, setSearch] = useState(searchTerm);
    const [results, setResults] = useState({});
    const navigate = useNavigate();
    const searchDogs = async () => {
        const response = await fullTextSearch(search);
        setResults(response)
        navigate(`/dogs/search/${search}`);
    }
    useEffect(() => {
        if (searchTerm) {
            searchDogs();
        }},[searchTerm]
    );

    console.log("results is:", results);

    return (
        <div>
            <h1>Dogs Search</h1>
            <button className="float-end btn btn-primary" onClick={searchDogs}>
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
                    results && Object.keys(results).map((dog,idx) => (
                        <li className="list-group-item" key={idx}>
                        <img src={results[dog].url} width={400} height={300} alt={results[dog].id}/>
                        <Link to={`/dogs/search/detail/${results[dog].id}`}>Check on my details!</Link>
                            <DogStats key={results[dog].id} dog={results[dog].id}/>
                        </li>
                    ))
                }
            </ul>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}

export default DogsSearch