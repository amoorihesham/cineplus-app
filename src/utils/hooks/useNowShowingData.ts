import { useSuspenseQuery } from "@tanstack/react-query";
import { getAllNowPlaying } from "../functions-api";

const useAllNSD = (page: number) => {

    return useSuspenseQuery({
        queryKey: ["getAllNowPlaying", page],
        queryFn: () => getAllNowPlaying(page),

    });
}

export default useAllNSD