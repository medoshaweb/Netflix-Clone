import React, { useState, useEffect, use } from 'react'
import './row.css'
import axios from '../../../utils/axios'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { useRef } from 'react';
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
        // return request;
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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }else{
            console.log("Trailer not found");
          }
        })
        .catch((error) => console.log(error));
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
        {/* <div className={`row-posters ${isLargeRow && "row-postersLarge"}`}> */}
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
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </div>
  </div>
);

}

export default Row