import { useSuspenseQuery } from "@tanstack/react-query"
import { getAllTopRated } from "../functions-api"

const useAllTRD = (page: number) => {
    return useSuspenseQuery({
        queryKey: ["Top-Rated", page],
        queryFn: () => getAllTopRated(page)
    })
}

export default useAllTRD