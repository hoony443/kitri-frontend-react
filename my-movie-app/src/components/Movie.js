import { Link } from "react-router-dom";

function Movie({loading, movies}) {
    return(
        <div style={{display: "flex", flexWrap: "wrap"}}>
        {loading ? (<h1>Loading...</h1>) : <div>
        {movies.map( movie => 
        <div key={movie.id} style={{width: "300px", margin: "10px"}}>
            <Link to={`/movie`}>
            <img style={{width: "300px"}} src={movie.large_cover_image} alt="movie poster"></img>
            </Link>
            <div style={{fontSize: "25px"}}>{movie.title} ({movie.genres})</div>
            <div style={{ margin: "10px 0px 30px"}}>{
            movie.description_full.length > 50 
            ? movie.description_full.substr(0, 50) + `...` 
            : movie.description_full }</div>
        </div>)}
        </div>}
        
        </div>
    );
}

export default Movie;