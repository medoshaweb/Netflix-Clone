import React, { useEffect, useRef } from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
import { useNavigation } from '../../../context/NavigationContext';

const RowList = () => {
  const { selectedCategory } = useNavigation();
  const rowListRef = useRef(null);

  // Scroll to top of row list when category changes
  useEffect(() => {
    if (rowListRef.current) {
      rowListRef.current.scrollIntoView({ behavior: 'instant', block: 'start' });
    }
  }, [selectedCategory]);

  // Get the rows to display based on selected category
  const getRowsForCategory = () => {
    switch (selectedCategory) {
      case 'Home':
        return (
          <>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          </>
        );
      case 'TV Shows':
        return (
          <>
            <Row title="Trending TV Shows" fetchUrl={requests.fetchTvShows} isLargeRow />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Top Rated TV Shows" fetchUrl={requests.fetchTopRatedMovies} />
          </>
        );
      case 'Movies':
        return (
          <>
            <Row title="Trending Movies" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          </>
        );
      case 'Games':
        return (
          <>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          </>
        );
      case 'New & Popular':
        return (
          <>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
          </>
        );
      default:
        return (
          <>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          </>
        );
    }
  };

  return (
    <div ref={rowListRef}>
      {getRowsForCategory()}
    </div>
  );
};

export default RowList;
