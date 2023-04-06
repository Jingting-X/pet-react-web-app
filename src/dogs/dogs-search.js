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
        </div>
    );
}

export default DogsSearch