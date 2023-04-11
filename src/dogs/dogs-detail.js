import {useParams} from "react-router-dom";

function DogsDetailScreen() {
    const {id} = useParams();
    return (
        <div>
            <h1>Dogs detail page {id}</h1>
            <img src={`https://cdn2.thedogapi.com/images/${id}.jpg`} width={400} height={300} alt={id}/>
        </div>
    )
}

export default DogsDetailScreen;