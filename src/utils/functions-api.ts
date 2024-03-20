import axios from "axios";
import { baseUrl, options } from "./api-config";

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
export async function getAllNowPlaying() {
  try {
    const { data } = await axios.get(
      `${baseUrl}now_playing?language=en-US&page=1`,
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
export async function getAllComingSoon(pagenum: number) {
  try {
    const { data } = await axios.get(
      `${baseUrl}upcoming?language=en-US&page=${pagenum}`,
      options
    );

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
