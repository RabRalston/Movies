import React, { useReducer } from "react";
import Movie from "./Movie";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchValue => {
    dispatch({
      type: "searchMovies"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "searchSuccess",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "searchError",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const movieResults =
    loading && !errorMessage ? (
      ''
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App">
      <div className="container-fluid">
        <section className="content">
				  <div className="row">
            <Search search={search} />
            <div className="movies">{movieResults}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
