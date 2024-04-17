import axios from "axios";
import { MDbaseURL, baseUrl, options, sBaseURL } from "./api-config";


export async function getAllNowPlaying(pageNum: number) {
  try {
    const { data } = await axios.get(
      `${baseUrl}now_playing?language=en-US&page=${pageNum}`,
      options
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getAllTopRated(pageNum: number) {
  try {
    const { data } = await axios.get(
      `${baseUrl}top_rated?language=en-US&page=${pageNum}`,
      options
    );


    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getAllComingSoon(pageNum: number) {
  try {
    const { data } = await axios.get(
      `${baseUrl}upcoming?language=en-US&page=${pageNum}`,
      options
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getAllPopular(pageNum: number) {
  try {
    const { data } = await axios.get(`${baseUrl}popular?language=en-US&page=${pageNum}`, options);

    return data
  } catch (error) {
    return error
  }

}

export async function searchHandler(term: string) {
  try {
    const { data } = await axios.get(`${sBaseURL}query=${term}&include_adult=false&language=en-US&page=1`, options);

    return data
  } catch (error) {
    return error
  }

}



export async function getMovieFullDetails(movieID: number | string | undefined) {
  try {
    const { data } = await axios.get(`${MDbaseURL}${movieID}?language=en-US`, options);

    return data
  } catch (error) {
    return error
  }

}

export async function getMovieVideos(movieID: number | string | undefined) {
  try {
    const { data } = await axios.get(`${MDbaseURL}${movieID}/videos?language=en-US`, options)

    return data
  } catch (error) {
    console.log(error)
  }
}
export async function getMovieProviders(movieID: number | string | undefined) {
  try {
    const { data: { results } } = await axios.get(`${MDbaseURL}${movieID}/watch/providers`, options)

    return results
  } catch (error) {
    console.log(error)
  }
}

export async function getUserWatchList(userId: any, userToken: any) {
  try {
    const { data } = await axios.get(`https://cinepluse-backend.onrender.com/api/watchlist/${userId}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })
    return data?.watchlist.movies

  } catch (error) {
    console.log(error)

  }
}