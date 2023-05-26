import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
        const json_data = await res.json();
        console.log(json_data);
        setMovies(json_data.data.movies);
        setLoading(false);
    }
    
    useEffect( () => {
        getMovies()}, []);
    return ( 
        <> 
        <Movie loading={loading} movies={movies} />
        </>
    );
}

export default Home;