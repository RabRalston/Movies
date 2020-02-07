export const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "searchMovies":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "searchSuccess":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "searchError":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};
