import {Link} from "react-router-dom";

function SearchScreen() {
    return (
        <div>
            <div>The Dogs API</div>
            <Link to="/dogs/search">Search</Link>
        </div>
    )
}

export default SearchScreen