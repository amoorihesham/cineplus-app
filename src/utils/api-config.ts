

export const baseUrl = "https://api.themoviedb.org/3/movie/";
export const sBaseURL = "https://api.themoviedb.org/3/search/movie?";
export const MDbaseURL = 'https://api.themoviedb.org/3/movie/'
export const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
};
