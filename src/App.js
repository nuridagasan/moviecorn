import "./App.css";
import MovieCard from "./MovieCard.jsx"
import {useEffect, useState} from "react";
import SearchIcon from "./search.svg"
//Provide your own API KEY
const API_URL = 'https://www.omdbapi.com?apikey=a0f54f24'
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Avengers');
    },[])
    
    return (
        <div className="app">
        <h1>MovieLand</h1>
  
        <div className="search">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Movies..."
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchInput)}
          />
        </div>
  
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    );
}

export default App;