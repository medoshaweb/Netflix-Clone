import React, { useState, useEffect } from 'react'
import './row.css'
import axios from '../../../utils/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className={`row-posters ${isLargeRow && "row-postersLarge"}`}>
        {movies.map((movie, index) => (
          <img
            key={index}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }} />}
    </div>
  )
}

export default Row