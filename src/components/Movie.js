import React from "react";

const placeholder =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdW2o5xrP2Wk-_yJsgV4AhmcSVRSYmuyNUGzU50Wo2e2qHTcum";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? placeholder : movie.Poster;
  return (
    <div class="large-4 medium-6 p-15">
      <div className="movie">
        <div class="card">
          <img alt={`${movie.Title}`} src={poster} />
          <div class="card-divider">
            <h2>{movie.Title}</h2>
            <p>({movie.Year})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
