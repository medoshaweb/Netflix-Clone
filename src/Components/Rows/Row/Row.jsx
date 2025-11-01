import React, { useState, useEffect, useRef } from 'react'
import './row.css'
import axios from '../../../utils/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow=false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const rowRef = useRef(null);  // Reference for the row scroll container
  

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const scroll = (direction) => {
    const { current } = rowRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -500 : 500;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleClick = async(movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      try {
        const url = await movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "");
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row-scroll-buttons">
        <button className="row_arrow left" onClick={() => scroll("left")}>
           <ArrowCircleLeftIcon />
        </button>
      
      <div className="row-posters" ref={rowRef}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={
              movie.name ||
              movie.title ||
              movie.original_name ||
              movie.original_title
            }
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>

      <button className="row_arrow right" onClick={() => scroll("right")}>
        <ArrowCircleRightIcon />
      </button>
      
      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1, rel: 0 } }}
        />
      )}
      </div>
    </div>
  );
}

export default Row