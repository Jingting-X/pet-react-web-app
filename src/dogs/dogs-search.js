import {useState} from "react";
import { fullTextSearch} from "./dogs-service";

function DogsSearch() {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState({});
    const searchDogs = async () => {
        const response = await fullTextSearch(search);
        setResults(response)
    }
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
            <h2>Results</h2>
            <ul className="list-group">
                {
                    results && Object.keys(results).map((dog,idx) => (
                        <li className="list-group-item" key={idx}>
                        <img src={results[dog].url} width={400} height={300} alt={results[dog].id}/></li>
                    ))
                }
            </ul>
            <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
}

export default DogsSearch