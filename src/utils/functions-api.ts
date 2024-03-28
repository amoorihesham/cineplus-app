import axios from "axios";
import { MDbaseURL, baseUrl, options, sBaseURL } from "./api-config";

export async function getNowPlaying() {
  try {
    const { data } = await axios.get(
      `${baseUrl}now_playing?language=en-US&page=1`,
      options
    );
    const firstFour = await data?.results.slice(0, 4);

    return firstFour;
  } catch (error) {
    console.log(error);
    return error;
  }
}
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
export async function getComingSoon() {
  try {
    const { data } = await axios.get(
      `${baseUrl}upcoming?language=en-US&page=1`,
      options
    );
    const firstFour = await data?.results.slice(0, 4);

    return firstFour;
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

export async function searchHandler(term: string) {
  try {
    const { data } = await axios.get(`${sBaseURL}query=${term}&include_adult=false&language=en-US&page=1`, options);

    return data
  } catch (error) {
    return error
  }

}

export async function getTopRated() {
  try {
    const { data } = await axios.get(`${baseUrl}popular?language=en-US&page=1`, options);

    return data
  } catch (error) {
    return error
  }

}

export async function getMovieFullDetails(movieID: number) {
  try {
    const { data } = await axios.get(`${MDbaseURL}${movieID}?language=en-US`, options);

    return data
  } catch (error) {
    return error
  }

}