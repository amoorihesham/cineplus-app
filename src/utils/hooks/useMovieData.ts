import { useSuspenseQuery } from "@tanstack/react-query";
import { getMovieFullDetails, getMovieProviders, getMovieVideos } from "../functions-api";

const useMovieData = (movieID: number | string | undefined) => {
    const { data: MovieData } = useSuspenseQuery({
        queryKey: ["FullMovieDetails", movieID],
        queryFn: () => getMovieFullDetails(movieID),
    });
    const { data: VideosData } = useSuspenseQuery({
        queryKey: ["MovieVideos", movieID],
        queryFn: () => getMovieVideos(movieID)
    })
    const { data: ProvidersData } = useSuspenseQuery({
        queryKey: ["MovieProviders", movieID],
        queryFn: () => getMovieProviders(movieID)
    })
    return { MovieData, VideosData, ProvidersData }
}

export default useMovieData