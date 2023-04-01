import React, {useState} from 'react'
import Data from "./mock-data.json"

export default function SearchBar (){
    const [query, setQuery] = useState("")
    return (
        <div>
            <input placeholder="Search" onChange={event => setQuery(event.target.value)} />
            <ul className="list-group">{
                Data.filter(post => {
                    if (query === '') {
                        return;
                    } else if (post.first_name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <div className="box" key={index}>
                        <p>{post.first_name}</p>
                        <p>{post.last_name}</p>
                    </div>
                ))
            }</ul>
        </div>
)
}